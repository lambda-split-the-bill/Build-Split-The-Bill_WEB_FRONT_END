import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { signupReducer } from './signupReducer';
import { addBillReducer } from './bill';
import { addFriendReducer } from './friend';

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    addBill: addBillReducer,
    addFriend: addFriendReducer,
});

export default rootReducer;