import { Link } from "react-router-dom"
import useFetchById from "../hooks/useFetchById"
import { useEffect } from "react"
import { usePostContext } from "../hooks/usePostContext"
import { useAuthContext } from "../hooks/useAuthContext"

type postType = {
    postId: string;
    userId: string;
    content: String;
    date: string;
    likes: string[];
    likedPost?: Boolean
}
const Post = ({ postId, userId, content, date, likes, likedPost }: postType) => {
    console.log(postId, likedPost)

    const { fetchById, data } = useFetchById()
    const authProvider = useAuthContext()
    const postProvider = usePostContext()

    const buttonStyle = likedPost ? "bg-green-300 hover:bg-green-400" : "bg-blue-300 hover:bg-blue-400"

    useEffect(() => {
        fetchById(userId)
    }, [])






    const HandleLike = () => {
        postProvider.HandleLike(authProvider.user?.id, postId, authProvider.user?.token)
    }

    return (
        <div className="w-[80%] mx-auto bg-white shadow-lg p-6 mb-4">

            <Link to={`/user/${userId}`} className="text-blue-400 text-xl tracking-wide">{data?.name}</Link>

            <p className="font-medium my-3 tracking-wide text-[16px] line leading-6">{content}</p>

            <p>{date}</p>

            <div className="flex items-center gap-6 mt-3">

                <button
                    className={`shadow-md  px-3 tracking-wide 
                    border-gray-400 border-2 rounded-sm  transition-all ${buttonStyle}`}
                    onClick={HandleLike}

                >
                    {likedPost ? "Liked" : "Like"}
                </button>

                <Link to='#' className="text-[18px] font-semibold text-blue-500 underline">
                    {likes.length} People like this.
                </Link>

            </div>

        </div>
    )
}

export default Post