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