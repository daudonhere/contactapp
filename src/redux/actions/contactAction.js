import axios from 'axios';

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';

export const getAllContact = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_CONTACT_REQUEST });
        try {
            const response = await axios.get(`${process.env.API_URL}/contact`);
            dispatch({ type: FETCH_CONTACT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_CONTACT_FAILURE, payload: error.message });
        }
    };
};

export const SAVE_CONTACT_REQUEST = 'SAVE_CONTACT_REQUEST';
export const SAVE_CONTACT_SUCCESS = 'SAVE_CONTACT_SUCCESS';
export const SAVE_CONTACT_FAILURE = 'SAVE_CONTACT_FAILURE';

export const saveContact = (data) => {
    return async (dispatch) => {
        dispatch({ type: SAVE_CONTACT_REQUEST });
        try {
            const response = await axios.post(`${process.env.API_URL}/contact`, data);
            dispatch({ type: SAVE_CONTACT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: SAVE_CONTACT_FAILURE, payload: error.message });
        }
    };
};

export const GET_CONTACT_REQUEST = 'GET_CONTACT_REQUEST';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_FAILURE = 'GET_CONTACT_FAILURE';

export const getContactId = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_CONTACT_REQUEST });
        try {
            const response = await axios.get(`${process.env.API_URL}/contact`, id);
            dispatch({ type: GET_CONTACT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_CONTACT_FAILURE, payload: error.message });
        }
    };
};

export const EDIT_CONTACT_REQUEST = 'EDIT_CONTACT_REQUEST';
export const EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS';
export const EDIT_CONTACT_FAILURE = 'EDIT_CONTACT_FAILURE';

export const editContact = (id) => {
    return async (dispatch) => {
        dispatch({ type: EDIT_CONTACT_REQUEST });
        try {
            const response = await axios.get(`${process.env.API_URL}/contact`, id);
            dispatch({ type: EDIT_CONTACT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: EDIT_CONTACT_FAILURE, payload: error.message });
        }
    };
};