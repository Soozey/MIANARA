import { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for token on load
        const token = localStorage.getItem('access_token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                // Check expiry
                if (decoded.exp * 1000 < Date.now()) {
                    logout();
                } else {
                    setUser({
                        username: decoded.user_id, // SimpleJWT default payload usually has user_id, but let's check backend settings or customize serializer if we want username. 
                        // Actually default SimpleJWT token has 'user_id'. To get username we might need to fetch profile or customize token.
                        // For now, let's assume we are logged in.
                        id: decoded.user_id
                    });
                    // Ideally fetch full user profile here
                }
            } catch (e) {
                logout();
            }
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        const response = await api.post('/token/', { username, password });
        const { access, refresh } = response.data;

        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);

        const decoded = jwtDecode(access);
        setUser({ id: decoded.user_id, username }); // We know username from input
        return true;
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

export const useAuth = () => useContext(AuthContext);
