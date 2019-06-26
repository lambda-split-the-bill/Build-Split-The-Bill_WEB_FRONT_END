import { ADD_BILL, SUCCESS_BILL, FAILED_BILL } from '../actions';

const initialState = {
    bill: [],
    error: null,
    addingBill: false
};

export const addBillReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BILL:
            return{
                ...state,
                error: '',
                addingBill: true
            }
        case SUCCESS_BILL:
            return{
                ...state,
                error: '',
                addingBill: false,
                bill: action.payload
            }
        case FAILED_BILL:
            return{
                ...state,
                error: 'Bill not added',
                addingBill: false
            }
        default:
                return state;
    }
}