import Post from "./Post"
import { usePostContext } from "../hooks/usePostContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { postType } from "../useContext/PostContext"

const Posts = () => {

  const provider = usePostContext()
  const { user } = useAuthContext()

  const liked = (post: postType) => {
    if (user?.id) {
      if (post.likes.includes(user.id)) {
        return true
      }
      return false
    }
  }



  return (
    <>
      {provider?.posts?.map((post, idx) =>
      (
        <Post
          key={idx}
          postId={post._id}
          userId={post.userId}
          content={post.content}
          date={post.createdAt}
          likes={post.likes}
          likedPost={liked(post)}
          display={true}

        />)
      )}
    </>
  )
}

export default Posts