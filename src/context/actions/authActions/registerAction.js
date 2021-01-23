import axiosInstance from "../../../api/axios";

const registerAction = (data) => {
  axiosInstance().post("/auth/register", data);
};
export default registerAction;
