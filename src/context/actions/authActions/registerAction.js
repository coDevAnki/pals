import axiosInstance from "../../../api/axios";
import { REGISTER_FAILURE, REGISTER_LOADING, REGISTER_SUCCESS } from "../../actionTypes";

const registerAction = async (data, dispatch, history) => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const res = await axiosInstance().post("/auth/register", data);
    if (res) {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.user });
      history.push("/");
    }
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err?.message });
  }
};

export default registerAction;
