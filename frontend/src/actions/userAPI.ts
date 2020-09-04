import axios, { AxiosResponse } from "axios";
import { tokenConfig } from "./transactionAPI"

const baseUrl: string = "http://localhost:8000";

export const createUser = async (username: string, password: string, email: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const login: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/auth/users/",{"email": email, "username": username, "password": password});
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const loginUser = async (username: string, password: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ username, password });
    const login: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/auth/token/login/", body, config);
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const logoutUser = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const login: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/auth/token/logout/");
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const userDetails = async (token: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const login: AxiosResponse<ApiDataType> = await axios.get(baseUrl + "/auth/users/me/", tokenConfig(token));
    return login;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const login: AxiosResponse<ApiDataType> = await axios.delete(baseUrl + "/auth/users/me/");
    return login;
  } catch (error) {
    throw new Error(error);
  }
};