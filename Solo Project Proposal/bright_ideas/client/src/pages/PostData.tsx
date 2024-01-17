import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PostContextProvider, postType } from "../useContext/PostContext"
import axios from "axios"
import { useAuthContext } from "../hooks/useAuthContext"
import Post from "../components/Post"
import Header from "../components/Header"
import RenderText from "../components/RenderText"
const PostData = () => {

    const { user } = useAuthContext()

    const { postId } = useParams()
    const [post, setPost] = useState<postType | null>(null)

    const getData = async () => {
        try {
            const res: any = await axios.get(`http://localhost:5000/api/getPost/${postId}`,
                {
                    params:
                        { authorization: `Bearer ${user?.token}` }
                })
            setPost(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getData()
    }, [])


    if (post) {
        return (
            <>
                <Header />
                <div className="w-[60%] mx-auto mt-20">
                    <PostContextProvider>
                        <Post postId={post._id}
                            userId={post.userId}
                            content={post.content}
                            date={post.createdAt}
                            likes={post.likes}
                            display={false}
                        />
                    </PostContextProvider>

                    <div>
                        <h2 className="text-center mt-20 mb-10">Peaple Who likes this post</h2>
                        <table className="w-full text-sm text-center text-gray-400">
                            <thead className="text-xs text-black uppercase bg-blue-400 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">UserName</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post.likes.map((like, idx) => (
                                        <tr key={idx} className="text-black border-b bg-gray-300">
                                            <td scope="col" className="px-6 py-3 text-xl font-medium uppercase">
                                                <RenderText id={like} />
                                            </td>
                                            <td scope="col" className="px-6 py-3 text-xl font-medium uppercase">
                                                <RenderText id={like} name={true} />
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>



                        </table>
                    </div>

                </div>
            </>
        )
    }

}

export default PostData