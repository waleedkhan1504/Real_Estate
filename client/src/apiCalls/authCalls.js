import { axiosInstance } from ".";

export const RegisterUser = async (payload) => {
  const response = await axiosInstance("post", "/api/auth/register", payload);
  return response;
};
export const LoginUser = async (payload) => {
  const response = await axiosInstance("post", "/api/auth/login", payload);
  return response;
};
export const UpdateProfile = async (payload, id) => {
  const response = await axiosInstance(
    "put",
    `api/auth/updateUser/${id}`,
    payload
  );
  return response;
};
