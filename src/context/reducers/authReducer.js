import {
  CLEAR_AUTH,
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../actionTypes";
import { initialAuthState } from "../initialStates";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loginUser: { loading: true, currentUser: null, error: null },
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginUser: {
          loading: false,
          currentUser: payload,
          error: null,
        },
      };

    case LOGIN_FAILURE:
      console.log({
        ...state,
        loginUser: { loading: false, currentUser: null, error: payload },
      });
      return {
        ...state,
        loginUser: { loading: false, currentUser: null, error: payload },
      };

    case LOGOUT:
      return {
        ...state,
        loginUser: { loading: false, currentUser: null, error: null },
      };

    case REGISTER_LOADING:
      return {
        ...state,
        registerUser: { loading: true, data: null, error: null },
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        registerUser: { loading: false, data: payload, error: null },
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        registerUser: { loading: false, data: null, error: payload },
      };
    case CLEAR_AUTH:
      return initialAuthState;
    default:
      return state;
  }
};
export default authReducer;
