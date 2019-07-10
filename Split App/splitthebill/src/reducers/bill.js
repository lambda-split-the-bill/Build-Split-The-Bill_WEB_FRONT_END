import { ADD_BILL, SUCCESS_BILL, FAILED_BILL, FETCH_BILL, SUCCESS_ADD_BILL, SUCCESS_DELETE_BILL, DELETE_BILL } from '../actions';

const initialState = {
    bill: [],
    error: null,
    addingBill: false,
    billShowing: false,
    deleteingBill: false
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
                billShowing: true,
                bill: action.payload
            }
        case FAILED_BILL:
            return{
                ...state,
                error: 'Bill not added',
                addingBill: false
            }
        case FETCH_BILL:
            return{
                ...state,
                error: '',
                addingBill: true
            }
        case SUCCESS_ADD_BILL:
            return{
                ...state,
                error: '',
                addingBill: false,
                billShowing: true,
                bill: [...state.bill, action.payload]
            }
        case SUCCESS_DELETE_BILL:
            return{
                ...state,
                error: '',
                deleteingBill: false,
                bill: state.bill.filter(bill => bill.id !== action.payload)
            }
        case DELETE_BILL:
            return{
                ...state,
                error: '',
                deleteingBill: true
            }
        default:
                return state;
    }
}


