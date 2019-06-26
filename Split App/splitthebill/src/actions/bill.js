import axios from 'axios';

export const ADD_BILL = 'ADD_BILL';
export const SUCCESS_BILL = 'SUCCESS_BILL';
export const FAILED_BILL = 'FAILED_BILL';

export const DELETE_BILL = 'DELETE_BILL';

export function addBill(bill) {
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
