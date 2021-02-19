import axiosInstance from "../api/axios";

const MockRegister = (data) => ({
  username: data.username || "",
  first_name: "xx",
  last_name: "xx",
  password: "xxxxxxxx",
});

export const serverSideUsernameValidate = async (dataToValidate) => {
  try {
    const data = await axiosInstance().post("/auth/register", {
      ...MockRegister({ username: dataToValidate }),
    });
    return data.response;
  } catch (err) {
    const errors = err?.response?.data;
    if (errors.username) return errors.username.join("");
  }
};
