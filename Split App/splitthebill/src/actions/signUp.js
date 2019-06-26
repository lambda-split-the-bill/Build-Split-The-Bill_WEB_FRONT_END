import axios from 'axios';

const path = 'https://lambda-split-the-bill-be.herokuapp.com/api/auth/register';

export const CREATE_USER = 'CREATE_USER';
export const SUCCESS_CREATE = 'SUCCESS_CREATE';
export const FAILED_CREATE = 'FAILED_CREATE';

export const signUp = creds => {
    return dispatch => {
        dispatch({ type: CREATE_USER });
            axios  
                .post(path, creds)
                .then(res => {
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    dispatch({ type: SUCCESS_CREATE });
                })
                .catch(err => {
                    console.log(err)
                    dispatch({ type: FAILED_CREATE })
                })
    };
}