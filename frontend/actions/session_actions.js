import  *  as APIUtil from "../util/session_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    };
};

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const removeSessionErrors = () => {
    return {
        type: REMOVE_SESSION_ERRORS
    };
};

export const signup = (user) => dispatch => {
    return APIUtil.signup(user)
        .then(
            oldUser => dispatch(receiveCurrentUser(oldUser)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON))
        );
};

export const login = (user) => dispatch => {
    return APIUtil.login(user)
        .then(
            oldUser => dispatch(receiveCurrentUser(oldUser)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON))
        );
};

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()));
};

export const requestUser = (userId) => {
    return dispatch => {
        return APIUtil.fetchUser(userId)
            .then(currentUser => {
                return dispatch(receiveCurrentUser(currentUser));
            });
    };
};

export const requestUsers = () => {
    return dispatch => {
        return APIUtil.fetchUsers()
            .then(users => {
                return dispatch(receiveUsers(users));
            });
    };
};