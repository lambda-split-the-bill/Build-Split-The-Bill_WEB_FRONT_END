import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { signupReducer } from './signupReducer';
import { addBillReducer } from './addBill';
import { addFriendReducer } from './addFriend';
import { deleteBillReducer } from './deleteBill';
import { deleteFriendReducer } from './deleteFriend';

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    addBill: addBillReducer,
    deleteBill: deleteBillReducer,
    addFriend: addFriendReducer,
    deleteFriend: deleteFriendReducer
});

export default rootReducer;