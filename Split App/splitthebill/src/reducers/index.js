import {   
    CREATE_USER,
    SUCCESS_CREATE,
    FAILED_CREATE,
    FETCH_USER,
    SUCCESS_USER,
    FAILED_USER,
    ADD_FRIEND,
    SUCCESS_FRIEND,
    FAILED_FRIEND,
    DELETE_FRIEND,
    ADD_BILL,
    SUCCESS_BILL,
    FAILED_BILL,
    DELETE_BILL } from '../actions';

const initialState = {
    username: '',
    password: '',
    email: '',
    creatingUser: false,
    fetchingUser: false,
    addingFriend: false,
    addingBill: false,
    friend: '',
    bill: '',
    error: null
}

export const splitReducer = (state = initialState, action) => {
    switch(action.type) {

        //CASES FOR SIGNUP
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
                username: action.payload,
                password: action.payload,
                email: action.payload
            }
        case FAILED_CREATE:
            return{
                error: 'User not created',
                creatingUser: false
            }
        
        //CASES FOR LOGIN
        case FETCH_USER:
            return{
                ...state,
                error: '',
                fetchingUser: true
            }
        case SUCCESS_USER:
            return{
                ...state,
                fetchingUser: false,
                username: action.payload,
                password: action.payload,
            }
        case FAILED_USER:
            return{
                error: 'User not found',
                fetchingUser: false
            }
        
        //CASES FOR FRIENDLIST
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
                error: 'Friend not added',
                addingFriend: false
            }
        case DELETE_FRIEND:
            return{
                ...state,
                error: '',
                addingFriend: false
                }

        //CASES FOR BILL
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
                error: 'Bill not added',
                addingBill: false
            }
        case DELETE_FRIEND:
            return{
                ...state,
                error: '',
                addingBill: false
            }
    }
}