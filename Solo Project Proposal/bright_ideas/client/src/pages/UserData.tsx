import { useParams } from "react-router-dom"
import useFetchById from "../hooks/useFetchById"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

import { useFetch } from "../hooks/useFetch"

const UserData = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { fetchById, data } = useFetchById()
  const { fetch, postData } = useFetch()

  useEffect(() => {
    if (id) fetchById(id)
    else navigate('/')
    fetch()
  }, [])

  const getInfo = () => {
    let likes = 0
    let posts = 0
    postData.forEach((post: any) => {
      if (post.userId === id) {
        posts += 1
        likes += post.likes.length
      }
    })
    return { posts, likes }
  }

  const { posts, likes } = getInfo()

  return (
    <>
      <Header />
      <div className="w-[60%] m-auto py-10">
        <div className="flex flex-col gap-10 pb-20 mb-10 border-b-2 border-black">
          <h2><span className="text-blue-500 mr-6">Name:</span>{data?.name}</h2>
          <h2><span className="text-blue-500 mr-6">UserName:</span>{data?.username}</h2>
          <h2><span className="text-blue-500 mr-6">Email:</span>{data?.email}</h2>
        </div>
        <div>
          <h2 className="mb-5">
            <span className="text-blue-500 mr-6">Total number of Posts :</span>
            {posts}
          </h2>
          <h2>
            <span className="text-blue-500 mr-6">Total number of Likes :</span>
            {likes}
          </h2>
        </div>
      </div>
    </>
  )
}

export default UserData