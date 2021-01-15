import axiosInstance from "../api/axios";

const MockRegister = {
  username: "xx",
  // first_name: "xxx",
  // last_name: "xxx",
  password: "xxxxxxxx",
  // email: "xxx@xmail.com",
};

const serverSideValidate = async (toValidateData) => {
  try {
    await axiosInstance.post("/auth/register", {
      ...MockRegister,
      ...toValidateData,
    });
  } catch (e) {
    return e.response?.data;
  }
};

export default serverSideValidate;
