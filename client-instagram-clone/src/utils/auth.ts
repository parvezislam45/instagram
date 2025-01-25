import axiosInstance, { setAuthToken } from "./api";

interface LoginResponse {
  access: string;
  refresh: string;
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/token/', {
    username,
    password,
  });
  const { access, refresh } = response.data;
  setAuthToken(access);
  localStorage.setItem('access_token', access);
  localStorage.setItem('refresh_token', refresh);
  return response.data;
};

export const register = async (username: string, email: string, password: string): Promise<void> => {
  await axiosInstance.post('/users/', {
    username,
    email,
    password,
  });
};

export const refreshToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem('refresh_token');
  if (refreshToken) {
    const response = await axiosInstance.post<{ access: string }>('/token/refresh/', {
      refresh: refreshToken,
    });
    const { access } = response.data;
    setAuthToken(access);
    localStorage.setItem('access_token', access);
    return access;
  }
  throw new Error('No refresh token available');
};