export const isAutenticated = () => {
    let token = sessionStorage.getItem('token');

    if (!token)
        return false

    return true
};