const PostInput = () => {
    return (
        <div className="w-full">
            <form className="flex items-center justify-center">

                <input type="text" placeholder="Post something witty here ..." className="w-[60%]" />

                <button type="submit" className="px-10 ml-10">Idea!</button>

            </form>
        </div>
    )
}

export default PostInput