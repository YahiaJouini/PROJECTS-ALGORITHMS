import { useState } from "react"
import { userType } from "../useContext/AuthContext"
import { usePostContext } from "../hooks/usePostContext"

const PostInput = ({ user }: { user: userType }) => {

    const provider = usePostContext()


    const [content, setContent] = useState('')

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const likes: string[] = []
        provider?.HandleSubmit(user.id, user.token, content, likes)
        setContent('')

    }


    return (
        <div className="w-full">
            <form className="flex items-center justify-center" onSubmit={HandleSubmit}>

                <input type="text"
                    placeholder="Post something witty here ..."
                    className="w-[60%] h-[38px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button
                    type="submit" className="px-10 ml-10">Idea!</button>

            </form>
        </div>
    )
}

export default PostInput