const DEFAULT_API_ORIGIN = 'https://mianàra.com';

export const API_ORIGIN = import.meta.env.VITE_API_ORIGIN || DEFAULT_API_ORIGIN;
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${API_ORIGIN}/api`;

// Backward-compatible export for older services that still expect the API origin.
export const API_URL = API_ORIGIN;
