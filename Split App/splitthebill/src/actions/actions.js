import axios from './node_modules/axios';

const registerPath = 'https://lambda-split-the-bill-be.herokuapp.com/api/auth/register';

const logPath = `https://lambda-split-the-bill-be.herokuapp.com/api/auth/login`;

export const CREATE_USER = 'CREATE_USER';
export const SUCCESS_CREATE = 'SUCCESS_CREATE';
export const FAILED_CREATE = 'FAILED_CREATE';

export const FETCH_USER = 'FETCH_USER';
export const SUCCESS_USER = 'SUCCESS_USER';
export const FAILED_USER = 'FAILED_USER';

export const ADD_FRIEND = 'ADD_FRIEND';
export const SUCCESS_FRIEND = 'SUCCESS_FRIEND';
export const FAILED_FRIEND = 'FAILED_FRIEND';

export const DELETE_FRIEND = 'DELETE_FRIEND';

export const ADD_BILL = 'ADD_BILL';
export const SUCCESS_BILL = 'SUCCESS_BILL';
export const FAILED_BILL = 'FAILED_BILL';

export const DELETE_BILL = 'DELETE_BILL';


export function signUp() {
    return dispatch => {
        dispatch({ type: CREATE_USER });
            axios  
                .post(registerPath, creds)
                .then((res) => {
                    dispatch({ type: SUCCESS_CREATE, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_CREATE, payload: err }))
    };
};

export function logIn() {
    return dispatch => {
        dispatch({ type: FETCH_USER })
            axios
                .post(logPath, creds)
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userId", res.data.id)
                    dispatch({ type: SUCCESS_USER, payload: res.data })
            })
                .catch(err => dispatch({ type: FAILED_USER, payload: err }))
    };
};

export function addFriend() {
    return dispatch => {
        dispatch({ type: ADD_FRIEND })
            axios
                .post(``, friend)
                .then((res) => {
                    dispatch({ type: SUCCESS_FRIEND, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_FRIEND, payload: err }))
    };
};

export function deleteFriend(id) {
    return dispatch => {
        dispatch({ type: DELETE_FRIEND });
            axios
                .delete(``)
                .then(res => {
                    dispatch({ type: SUCCESS_FRIEND, payload: res.data });
                })
                .catch(err => dispatch({ type: FAILED_FRIEND, payload: err}))
    };
};

export function addBill() {
    return dispatch => {
        dispatch({ type: ADD_BILL })
            axios
                .post(``, bill)
                .then((res) => {
                    dispatch({ type: SUCCESS_BILL, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_BILL, payload: err }))
    };
};

export function deleteBill(id) {
    return dispatch => {
        dispatch({ type: DELETE_BILL });
            axios
                .delete(``)
                .then(res => {
                    dispatch({ type: SUCCESS_BILL, payload: res.data });
                })
                .catch(err => dispatch({ type: FAILED_BILL, payload: err}))
    };
};
