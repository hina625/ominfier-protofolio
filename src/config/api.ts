/**
 * API Configuration
 * Centralized configuration for all API endpoints
 */

// Base API URL configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  // Health check
  HEALTH: '/health',
  
  // Admin endpoints
  ADMIN: {
    LOGIN: '/admin/login',
    PROFILE: '/admin/profile',
    LOGOUT: '/admin/logout',
  },
  
  // Contact endpoints
  CONTACTS: {
    BASE: '/contacts',
    BY_ID: (id: string) => `/contacts/${id}`,
    MARK_READ: (id: string) => `/contacts/${id}/read`,
    REPLY: (id: string) => `/contacts/${id}/reply`,
    REPLIES: (id: string) => `/contacts/${id}/replies`,
  },
  
  // Dashboard endpoints
  DASHBOARD: {
    STATS: '/dashboard/stats',
  },
} as const;

// Helper function to build full URL
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function for API requests
export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const url = buildApiUrl(endpoint);
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  return fetch(url, defaultOptions);
};

// Error handling helper
export const handleApiError = (error: any): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
};
