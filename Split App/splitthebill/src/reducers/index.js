import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { signupReducer } from './signupReducer';
import { addBillReducer } from './addBill';
import { addFriendReducer } from './friend';
import { deleteBillReducer } from './deleteBill';

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    addBill: addBillReducer,
    deleteBill: deleteBillReducer,
    addFriend: addFriendReducer,
});

export default rootReducer;