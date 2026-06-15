import { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

const AuthContext = createContext(null);

const normalizeUser = (rawUser = {}) => {
    const role = rawUser.role || 'STUDENT';
    const isAdmin = Boolean(rawUser.is_admin || rawUser.is_staff || rawUser.is_superuser || role === 'ADMIN');
    const isModerator = Boolean(rawUser.is_moderator || isAdmin || role === 'MODERATOR');
    const isCreator = Boolean(rawUser.is_creator || isModerator || role === 'CREATOR');

    return {
        ...rawUser,
        role,
        isAdmin,
        isModerator,
        isCreator,
    };
};

const userFromToken = (token) => {
    const decoded = jwtDecode(token);
    return normalizeUser({
        id: decoded.user_id,
        username: decoded.username || decoded.user_id,
        email: decoded.email || '',
        role: decoded.role,
        is_staff: decoded.is_staff,
        is_superuser: decoded.is_superuser,
    });
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const restoreSession = async () => {
            const token = localStorage.getItem('access_token');
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 < Date.now()) {
                    logout();
                    return;
                }

                setUser(userFromToken(token));
                const response = await api.get('/users/me/');
                setUser(normalizeUser(response.data));
            } catch {
                logout();
            } finally {
                setLoading(false);
            }
        };

        restoreSession();
    }, []);

    const login = async (username, password) => {
        try {
            const response = await api.post('/token/', { username, password });
            const { access, refresh, user: profile } = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            setUser(normalizeUser(profile || userFromToken(access)));
            return true;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const register = async (userData) => {
        await api.post('/users/register/', userData);
        return true;
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
