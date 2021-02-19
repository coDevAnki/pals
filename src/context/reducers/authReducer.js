import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../actionTypes";

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
        registerUser: { loading: true, data: payload, error: null },
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        registerUser: { loading: true, data: null, error: payload },
      };

    default:
      return state;
  }
};
export default authReducer;
