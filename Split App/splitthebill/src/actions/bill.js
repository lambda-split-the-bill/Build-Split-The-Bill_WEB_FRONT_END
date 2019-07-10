import { axiosWithAuth } from '../authorization/axiosWithAuth';

// const path = `https://lambda-split-the-bill-be.herokuapp.com/api/bills`
const path = `http://localhost:3000/bills`

export const ADD_BILL = 'ADD_BILL';
export const SUCCESS_BILL = 'SUCCESS_BILL';
export const FAILED_BILL = 'FAILED_BILL';
export const FETCH_BILL = 'FETCH_BILL';
export const SUCCESS_ADD_BILL = 'SUCCESS_ADD_BILL'
export const SUCCESS_DELETE_BILL = 'SUCCESSS_DELETE_BILL';
export const DELETE_BILL = 'DELETE_BILL';

export function addBill(bill) {
    return dispatch => {
        dispatch({ type: ADD_BILL })
            axiosWithAuth()
                .post(path, bill)
                .then((res) => {
                    dispatch({ type: SUCCESS_ADD_BILL, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_BILL, payload: err }))
    };
};

export function getBill() {
    return dispatch => {
        dispatch({ type: FETCH_BILL });
            axiosWithAuth()
                .get(path)
                .then(res => {
                    dispatch({ type: SUCCESS_BILL, payload: res.data });
                })
                .catch(err => dispatch({ type: FAILED_BILL, payload: err}))
    };
};

export function deleteBill(id) {
    return dispatch => {
        dispatch({ type: DELETE_BILL });
            axiosWithAuth()
                .delete(`http://localhost:3000/bills/${id}`)
                .then(res => {
                    console.log(res.data)
                    dispatch({ type: SUCCESS_DELETE_BILL, payload: id});
                })
                .catch(err => dispatch({ type: FAILED_BILL, payload: err}))
    };
};