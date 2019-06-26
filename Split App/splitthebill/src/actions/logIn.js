import axios from 'axios';

const path = `https://lambda-split-the-bill-be.herokuapp.com/api/auth/login`;

export const FETCH_USER = 'FETCH_USER';
export const SUCCESS_USER = 'SUCCESS_USER';
export const FAILED_USER = 'FAILED_USER';

export const  logIn = creds => {
    return dispatch => {
        dispatch({ type: FETCH_USER })
            axios
                .post(path, creds)
                .then(res => {
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userId", res.data.id)
                    dispatch({ type: SUCCESS_USER })
            })
                .catch(err => { 
                    console.log(err)
                    dispatch({ type: FAILED_USER });
    })}
};