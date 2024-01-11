import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const provider = useAuthContext()
    const logout = () => {

        //removing user from storage
        localStorage.removeItem('user')

        //emptying the global state
        provider.setUser(null)

    }
    return { logout }
}