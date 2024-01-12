type postType = {
    userId: string
    content: string
    date: string
}
const Post = ({ userId, content, date }: postType) => {
    return (
        <div className="w-[80%] mx-auto bg-white shadow-lg p-6 mb-4">
            <h4 className="text-blue-400 tracking-wide">{userId}</h4>
            <p className="font-medium my-3 tracking-wide text-[16px] line leading-6">{content}</p>
            <p>{date}</p>
        </div>
    )
}

export default Post