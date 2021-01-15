import { LOGOUT } from "../../actionTypes";

const loginAction = (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};

export default loginAction;
