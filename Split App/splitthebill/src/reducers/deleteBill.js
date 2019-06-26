import { SUCCESS_BILL, FAILED_BILL, DELETE_BILL} from '../actions';

const initialState = {
    bill: [],
    error: null,
    addingBill: false
};

export const deleteBillReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case DELETE_BILL:
            return{
                ...state,
                error: '',
                addingBill: false
            }
        default:
            return state;
    }
}