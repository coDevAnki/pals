import {
  CLEAR_CONTACTS,
  CLEAR_CREATE_CONTACT,
  CLEAR_DELETE_CONTACT,
  CLEAR_EDIT_CONTACT,
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  SEARCH_CONTACTS,
} from "../actionTypes";
import initialContactsState from "../initialStates/initialContactsState";

const contactsReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        addContact: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: [...state.contacts.data, payload],
        },
        addContact: {
          loading: false,
          data: payload,
          error: null,
        },
      };
    case CREATE_CONTACT_FAILURE:
      return {
        ...state,
        addContact: {
          loading: false,
          data: null,
          error: payload,
        },
      };
    case CLEAR_CREATE_CONTACT:
      return {
        ...state,
        addContact: {
          loading: false,
          data: null,
          error: null,
        },
      };
    case GET_CONTACTS_LOADING:
      return { ...state, contacts: { ...state.contacts, loading: true } };

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: payload,
          error: null,
          loaded: true,
        },
      };
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: [],
          error: payload,
        },
      };
    case CLEAR_CONTACTS:
      return initialContactsState;
    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: true,
          error: null,
          id: payload,
        },
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.filter(
            (contact) => +contact.id !== +state.deleteContact.id
          ),
        },
        deleteContact: {
          loading: false,
          error: null,
          id: null,
        },
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: payload,
          id: null,
        },
      };
    case CLEAR_DELETE_CONTACT:
      return {
        ...state,
        deleteContact: {
          loading: false,
          error: null,
          id: null,
        },
      };
    case EDIT_CONTACT_LOADING:
      return {
        ...state,
        editContact: {
          ...state.editContact,
          loading: true,
          error: null,
          data: null,
          id: payload,
        },
      };
    case EDIT_CONTACT_SUCCESS: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.map((contact) =>
            +contact.id === +state.editContact.id
              ? { ...contact, ...payload }
              : contact
          ),
        },
        editContact: {
          loading: false,
          error: null,
          id: null,
        },
      };
    }
    case EDIT_CONTACT_FAILURE:
      return {
        ...state,
        editContact: {
          ...state.editContact,
          loading: false,
          error: payload,
          id: null,
        },
      };
    case CLEAR_EDIT_CONTACT:
      return {
        ...state,
        editContact: {
          loading: false,
          error: null,
        },
      };
    case SEARCH_CONTACTS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          isSearchActive: !!payload.length ? true : false,
          searchedData: !!payload.length
            ? state.contacts.data.filter(
                ({ first_name, last_name }) =>
                  first_name.toLowerCase().includes(payload.toLowerCase()) ||
                  last_name.toLowerCase().includes(payload.toLowerCase())
              )
            : [],
        },
      };
    default:
      return state;
  }
};
export default contactsReducer;
