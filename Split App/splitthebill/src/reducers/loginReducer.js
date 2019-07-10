import { FETCH_USER, SUCCESS_USER, FAILED_USER} from '../actions';

const initialState = {
    fetchingUser: false,
    error: null,
    isLoggedIn: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return{
                ...state,
                error: null,
                fetchingUser: true,
                isLoggedIn: false
            }
        case SUCCESS_USER:
            return{
                ...state,
                fetchingUser: false,
                isLoggedIn: true,
                error: null
            }
        case FAILED_USER:
            return{
                ...state,
                error: 'User not found',
                fetchingUser: false,
                isLoggedIn: false
            }
        default:
            return state;
    }
}