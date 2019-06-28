import { axiosWithAuth } from '../authorization/axiosWithAuth';

// const path = `https://lambda-split-the-bill-be.herokuapp.com/api/friends`
const path = `http://localhost:3000/friends`

export const ADD_FRIEND = 'ADD_FRIEND';
export const SUCCESS_FRIEND = 'SUCCESS_FRIEND';
export const FAILED_FRIEND = 'FAILED_FRIEND';
export const FETCH_FRIEND = 'FETCH_FRIEND';
export const SUCCESS_ADD_FRIEND = 'SUCCESS_ADD_FRIEND';
export const SUCCESS_DELETE_FRIEND = 'SUCCESS_DELETE_FRIEND';

export const DELETE_FRIEND = 'DELETE_FRIEND';

export function addFriend(friend) {
    return dispatch => {
        dispatch({ type: ADD_FRIEND })
            axiosWithAuth()
                .post(path, friend)
                .then((res) => {
                    dispatch({ type: SUCCESS_ADD_FRIEND, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_FRIEND, payload: err }))
    };
};

export function getFriend() {
    return dispatch => {
        dispatch({ type: FETCH_FRIEND });
            axiosWithAuth()
                .get(path)
                .then(res => {
                    dispatch({ type: SUCCESS_FRIEND, payload: res.data });
                })
                .catch(err => dispatch({ type: FAILED_FRIEND, payload: err}))
    };
};

export function deleteFriend(id) {
    return dispatch => {
        dispatch({ type: DELETE_FRIEND });
            axiosWithAuth()
                .delete(`http://localhost:3000/friends/${id}`)
                .then(res => {
                    console.log(res.data)
                    dispatch({ type: SUCCESS_DELETE_FRIEND, payload: id});
                })
                .catch(err => dispatch({ type: FAILED_FRIEND, payload: err}))
    };
};