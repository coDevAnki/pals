import axiosInstance from "../../../api/axios";

export default (data) => {
  axiosInstance.post("/auth/register", data);
};
