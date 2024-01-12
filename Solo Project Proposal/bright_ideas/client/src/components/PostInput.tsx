import { useState } from "react"
import { userType } from "../useContext/AuthContext"
import axios from "axios"

const PostInput = ({ user }: { user: userType }) => {


    const [content, setContent] = useState('')

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const req = { authorization: `Bearer ${user.token}`, content: content, likes: [] }
        try {
            await axios.post('http://localhost:5000/api/addPost', req)
            setContent('')
        } catch (err) {
            console.log(err)
        }
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