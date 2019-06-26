import { CREATE_USER, SUCCESS_CREATE, FAILED_CREATE} from '../actions';

const initialState = {
    creatingUser: false,
    error: null
}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return{
                ...state,
                error: '',
                creatingUser: true,
            };
        case SUCCESS_CREATE:
            return{
                ...state,
                error: '',
                creatingUser: false,
                data: action.payload
            }
        case FAILED_CREATE:
            return{
                ...state,
                error: 'User not created',
                creatingUser: false
            }
        default:
            return state;
    }
}