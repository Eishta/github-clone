import {
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
} from './actionTypes';
import axios from 'axios';

// export function findUser(userName) {
//     return {
//         type: FIND_USER,
//         userName,
//     };
// }

export function requestUsers() {
    return {
        type: REQUEST_USERS,
    };
}

function receiveUsers(json) {
    return {
        type: RECEIVE_USERS,
        users: json,
    };
}

function receiveUsersErr(error) {
    return {
        type: RECEIVE_USERS_ERROR,
        error,
    };
}

export function selectUser(user) {
    return {
        type: SELECT_USER,
        user,
    };
}

export function requestUserData() {
    return {
        type: REQUEST_USERDATA,
    };
}

function receiveUserData(json) {
    return {
        type: RECEIVE_USERDATA,
        userData: json,
    };
}

function receiveUserDataErr(error) {
    return {
        type: RECEIVE_USERDATA_ERROR,
        error,
    };
}

function requestRepos() {
    return {
        type: REQUEST_REPOS,
    };
}

function receiveRepos(json) {
    return {
        type: RECEIVE_REPOS,
        repos: json,
    };
}

function receiveReposErr(error) {
    return {
        type: RECEIVE_REPOS_ERROR,
        error,
    };
}

export function fetchUsers(userName) {
    return dispatch => {
        dispatch(requestUsers(userName));
        return axios.get(`https://api.github.com/search/users?q=${userName}&user=name`)
            .then(res => res.data.items)
            .then(items => dispatch(receiveUsers(items)))
            .catch(err => dispatch(receiveUsersErr(err)));
    };
}
export function fetchUserData(user) {
    return dispatch => {
        dispatch(requestUserData());
        return axios.get(`https://api.github.com/users/${user}`)
            .then(res => res.data)
            .then(json => dispatch(receiveUserData(json)))
            .catch(err => dispatch(receiveUserDataErr(err)));
    };
}

function fetchRepos(user) {
    return dispatch => {
        dispatch(requestRepos());
        return axios.get(`https://api.github.com/users/${user}/repos`)
            .then(res => res.data)
            .then(json => dispatch(receiveRepos(json)))
            .catch(err => dispatch(receiveReposErr(err)));
    };
}

export function fetchUserAndRepos(user) {
    return (dispatch, getState) => {
        return dispatch(fetchUserData(user)).then(() => {
            debugger;
            const { currentUserData } = getState();
            if (
                !currentUserData.isFetching &&
                currentUserData.userData.message
            ) {
                return;
            }
            return dispatch(fetchRepos(user));
        });
    };
}