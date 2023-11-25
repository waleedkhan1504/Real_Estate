import { axiosInstance } from ".";

export const CreatteListing = async (payload, id) => {
  const response = await axiosInstance(
    "post",
    "/api/listing/create",
    payload,
    id
  );
  return response;
};
