import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionTypes";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, loading: true, currentUser: null, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, currentUser: payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, currentUser: null, error: payload };
    case LOGOUT:
      return { ...state, loading: false, currentUser: null, error: null };
    default:
      return state;
  }
};
export default authReducer;
