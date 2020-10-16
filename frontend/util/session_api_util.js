export const signup = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user },
    });
};

export const login = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    });
};

export const logout = () => {
    debugger;
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    });
};

export const fetchUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: "GET"
    })
}