import PostInput from "../components/PostInput"
import Header from "../components/Header"
import Posts from "../components/Posts"
import { useAuthContext } from "../hooks/useAuthContext"
const IdeasPage = () => {
    const provider = useAuthContext()
    return (
        <>
            <Header />
            <div className=" w-[60%] mx-auto ">
                {provider.user && (
                    <div className="mt-28 flex justify-center ">
                        <PostInput />
                    </div>
                )}

                <div className="mt-20">
                    <Posts />
                </div>

            </div>
        </>
    )
}

export default IdeasPage