import { ADD_FRIEND, SUCCESS_FRIEND, FAILED_FRIEND } from '../actions';

const initalState = {
    friend: [],
    error: null,
    addingFriend: false
}

export const addFriendReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return{
                ...state,
                error: '',
                addingFriend: true
            }
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
        default:
            return state;
    }
}