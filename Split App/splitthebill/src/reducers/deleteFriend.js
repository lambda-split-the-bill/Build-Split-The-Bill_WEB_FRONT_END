import { SUCCESS_FRIEND, FAILED_FRIEND, DELETE_FRIEND} from '../actions';

const initialState = {
    friend: [],
    error: null,
    addingFriend: false
}

export const deleteFriendReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_FRIEND:
            return{
                ...state,
                error: '',
                addingFriend: false,
                friend: action.payload
            }
        case FAILED_FRIEND:
            return{
                ...state,
                error: 'Friend not added',
                addingFriend: false
            }
        case DELETE_FRIEND:
            return{
                ...state,
                error: '',
                addingFriend: false
                }
        default:
            return state;
    }
}