import { useContext } from "react"
import { PostContext } from "../useContext/PostContext"
import Post from "./Post"

const Posts = () => {

  const provider = useContext(PostContext)

  return (
    <>
      {provider?.posts?.map(post =>
      (
        <Post userId={post.userId} content={post.content} date={post.createdAt} />)
      )}
    </>
  )
}

export default Posts