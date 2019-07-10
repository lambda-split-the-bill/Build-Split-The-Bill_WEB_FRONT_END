import { DELETE_FRIEND, SUCCESS_DELETE_FRIEND, ADD_FRIEND, SUCCESS_FRIEND, FAILED_FRIEND, FETCH_FRIEND, SUCCESS_ADD_FRIEND } from '../actions';

const initalState = {
    friend: [],
    error: null,
    addingFriend: false,
    friendShowing: false,
    deletingFriend: false
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
                friendShowing: true,
                friend: action.payload
            }
        case FAILED_FRIEND:
            return{
                ...state,
                error: 'Friend not added',
                addingFriend: false
            }
        case FETCH_FRIEND:
            return{
                ...state,
                error: '',
                addingFriend: true,
            }
        case SUCCESS_ADD_FRIEND:
            return{
                ...state,
                error: '',
                addingFriend: false,
                friendShowing: true,
                friend: [...state.friend, action.payload]
            }
        case DELETE_FRIEND:
            return{
                ...state,
                error: '',
                deletingFriend: true,
            }
        case SUCCESS_DELETE_FRIEND:
            return{
                ...state,
                error: '',
                deletingFriend: false,
                friend: state.friend.filter(friend => friend.id !== action.payload)
            }
        default:
            return state;
    }
}