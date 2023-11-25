import { useSelector } from "react-redux";
import { axiosInstance } from ".";
//const { currentUser } = useSelector((state) => state.users);
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
//get listing of a user
export const showUserListings = async (id) => {
  const response = await axiosInstance("get", `/api/user/listings/${id}`);
  return response;
};
