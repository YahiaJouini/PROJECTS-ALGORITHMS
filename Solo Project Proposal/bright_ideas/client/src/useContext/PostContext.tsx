import { createContext, useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import axios from "axios"


export type postType = {
    _id: string
    userId: string
    content: string
    likes: string[]
    createdAt: string
}

type PostContextType = {
    posts: postType[] | null
    HandleSubmit: (id: string, token: string, content: string, likes: string[]) => void
    HandleLike: (userId: string | undefined, postId: string, token: string | undefined) => void
    HandleDelete: (postId: string, token: string | undefined) => void
}
export const PostContext = createContext<PostContextType | null>(null)

export const PostContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [submitted, setSubmitted] = useState(0)

    const { fetch, postData } = useFetch()

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

    const HandleLike = async (userId: string | undefined, postId: string, token: string | undefined) => {
        if (token) {

            try {
                await axios.patch(`http://localhost:5000/api/LikePost/${postId}`, {
                    authorization: `Bearer ${token}`,
                    userId
                })
                fetch()
            } catch (err) {
                console.log(err)
            }
        }


    }

    const HandleDelete = async (postId: string, token: string | undefined) => {
        try {
            await axios.delete(`http://localhost:5000/api/deletePost/${postId}`, {
                params: {
                    authorization: `Bearer ${token}`
                }
            })
            fetch()
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetch()
    }, [submitted])

    

    const posts = postData

    return (
        <PostContext.Provider value={{ posts, HandleSubmit, HandleLike, HandleDelete }}>
            {children}
        </PostContext.Provider>
    )


}