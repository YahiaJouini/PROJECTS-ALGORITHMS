import { Link } from "react-router-dom"
import useFetchById from "../hooks/useFetchById"
import { useEffect } from "react"

type postType = {
    userId: String
    content: String
    date: String
    likes: String[]
}

const Post = ({ userId, content, date, likes }: postType) => {

    const { fetchById, data } = useFetchById()

    useEffect(() => {

        fetchById(userId)

    }, [])

    return (
        <div className="w-[80%] mx-auto bg-white shadow-lg p-6 mb-4">

            <Link to={`/user/${userId}`} className="text-blue-400 text-xl tracking-wide">{data?.name}</Link>

            <p className="font-medium my-3 tracking-wide text-[16px] line leading-6">{content}</p>

            <p>{date}</p>

            <div className="flex items-center gap-6 mt-3">

                <button className="shadow-md bg-blue-300 px-3 
                        tracking-wide border-gray-400 border-2 rounded-sm hover:bg-blue-400 transition-all">
                    Like
                </button>

                <Link to='#' className="text-[18px] font-semibold text-blue-500 underline">
                    {likes.length} People like this.
                </Link>

            </div>

        </div>
    )
}

export default Post