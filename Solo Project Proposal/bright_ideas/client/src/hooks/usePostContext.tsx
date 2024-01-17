import { useContext } from "react"
import { PostContext } from "../useContext/PostContext"

export const usePostContext = () => {
    const context = useContext(PostContext)
    if(!context) throw new Error("Must be used within AuthContextProvider")
    return context
}