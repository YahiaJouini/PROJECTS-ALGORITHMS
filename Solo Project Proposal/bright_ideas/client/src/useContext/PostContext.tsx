import { createContext, useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import axios from "axios"

export type postType = {
    userId: string
    content: string
    likes: String[]
    createdAt: string
}[]

type PostContextType = {
    posts: postType | null
    HandleSubmit: (id: string, token: string, content: string, likes: string[]) => void
}
export const PostContext = createContext<PostContextType | null>(null)

export const PostContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [submitted, setSubmitted] = useState(0)
    const { fetch, data } = useFetch()

    const HandleSubmit = async (id: string, token: string, content: string, likes: string[]) => {

        const req = {
            authorization: `Bearer ${token}`, 
            content, 
            likes,
            id
        }
        try {
            await axios.post('http://localhost:5000/api/addPost', req)
            setSubmitted(prev => prev += 1)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        fetch()
    }, [submitted])

    const posts = data

    return (
        <PostContext.Provider value={{ posts, HandleSubmit }}>
            {children}
        </PostContext.Provider>
    )


}