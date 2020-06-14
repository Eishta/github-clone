import { combineReducers } from 'redux';
import { currentUser, currentUserData, userRepos} from './reducer';

const rootReducer = combineReducers({
    currentUser,
    currentUserData,
    userRepos,
});