import axios from 'axios';

export const ADD_FRIEND = 'ADD_FRIEND';
export const SUCCESS_FRIEND = 'SUCCESS_FRIEND';
export const FAILED_FRIEND = 'FAILED_FRIEND';

export const DELETE_FRIEND = 'DELETE_FRIEND';

export function addFriend(friend) {
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