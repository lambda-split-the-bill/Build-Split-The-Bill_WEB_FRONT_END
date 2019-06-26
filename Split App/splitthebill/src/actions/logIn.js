import axios from 'axios';

const path = `https://lambda-split-the-bill-be.herokuapp.com/api/auth/login`;

export const FETCH_USER = 'FETCH_USER';
export const SUCCESS_USER = 'SUCCESS_USER';
export const FAILED_USER = 'FAILED_USER';

export function logIn(creds) {
    return dispatch => {
        dispatch({ type: FETCH_USER })
            axios
                .post(path, creds)
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userId", res.data.id)
                    dispatch({ type: SUCCESS_USER, payload: res.data })
            })
                .catch(err => dispatch({ type: FAILED_USER, payload: err }))
    };
};