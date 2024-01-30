export const IsAuth = () => {
    const login = localStorage.getItem('username')

    return {
        isAuth: !!login,
    }
}