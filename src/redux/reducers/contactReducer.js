import {
    FETCH_CONTACT_REQUEST,
    FETCH_CONTACT_SUCCESS,
    FETCH_CONTACT_FAILURE,
    SAVE_CONTACT_REQUEST,
    SAVE_CONTACT_SUCCESS,
    SAVE_CONTACT_FAILURE,
    GET_CONTACT_REQUEST,
    GET_CONTACT_SUCCESS,
    GET_CONTACT_FAILURE,
    EDIT_CONTACT_REQUEST,
    EDIT_CONTACT_SUCCESS,
    EDIT_CONTACT_FAILURE
} from '../actions/contactAction';

const initialState = {
    loading: false,
    result: {},
    error: '',
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CONTACT_SUCCESS:
            return {
                loading: false,
                result: action.payload,
                error: '',
            };
        case FETCH_CONTACT_FAILURE:
            return {
                loading: false,
                result: {},
                error: action.payload,
            };
        case SAVE_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SAVE_CONTACT_SUCCESS:
            return {
                loading: false,
                result: action.payload,
                error: '',
            };
        case SAVE_CONTACT_FAILURE:
            return {
                loading: false,
                result: {},
                error: action.payload,
            };
        case GET_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CONTACT_SUCCESS:
            return {
                loading: false,
                result: action.payload,
                error: '',
            };
        case GET_CONTACT_FAILURE:
            return {
                loading: false,
                result: {},
                error: action.payload,
            };
        case EDIT_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case EDIT_CONTACT_SUCCESS:
            return {
                loading: false,
                result: action.payload,
                error: '',
            };
        case EDIT_CONTACT_FAILURE:
            return {
                loading: false,
                result: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default contactReducer;
