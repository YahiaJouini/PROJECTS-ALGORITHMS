import PostInput from "../components/PostInput"
import Header from "../components/Header"
import Posts from "../components/Posts"
const IdeasPage = () => {
    return (
        <>
            <Header />
            <div className=" w-[60%] mx-auto ">

            <div className="mt-28 flex justify-center mb-20">
                <PostInput />
            </div>

            <div>
                <Posts />
            </div>

            </div>
        </>
    )
}

export default IdeasPage