import { useContext } from "react"
import { AuthContext } from "../useContext/AuthContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error("Must be used within AuthContextProvider")
    return context
}