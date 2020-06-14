import { combineReducers } from 'redux';
import {
    // FIND_USER,
    REQUEST_USERS,
    RECEIVE_USERS,
    RECEIVE_USERS_ERROR,
    SELECT_USER,
    REQUEST_USERDATA,
    RECEIVE_USERDATA,
    RECEIVE_USERDATA_ERROR,
    REQUEST_REPOS,
    RECEIVE_REPOS,
    RECEIVE_REPOS_ERROR,
} from '../actions/actionTypes';

// export function findUser(state = '', action) {
//     switch (action.type) {
//         case FIND_USER:
//             return action.userName;
//         default:
//             return state;
//     }
// }

export function usersList(
    state = {
        isFetching: false,
        usersList: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                isFetching: false,
                usersList: action.users,
            });
        case RECEIVE_USERS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                usersList: action.error,
            });
        default:
            return state;
    }
}

export function currentUser(state = '', action) {
    switch (action.type) {
        case SELECT_USER:
            return action.user;
        default:
            return state;
    }
}

export function currentUserData(
    state = {
        isFetching: false,
        userData: {},
    },
    action
) {
    switch (action.type) {
        case REQUEST_USERDATA:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_USERDATA:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.userData,
            });
        case RECEIVE_USERDATA_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                userData: action.error,
            });
        default:
            return state;
    }
}

export function userRepos(
    state = {
        isFetching: false,
        repos: [],
    },
    action
) {
    switch (action.type) {
        case REQUEST_REPOS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_REPOS:
            return Object.assign({}, state, {
                isFetching: false,
                repos: action.repos,
            });
        case RECEIVE_REPOS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                repos: action.error,
            });
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    usersList,
    currentUser,
    currentUserData,
    userRepos,
});