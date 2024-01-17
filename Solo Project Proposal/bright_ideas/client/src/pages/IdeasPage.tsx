import PostInput from "../components/PostInput"
import Header from "../components/Header"
import Posts from "../components/Posts"
import { useAuthContext } from "../hooks/useAuthContext"
import { PostContextProvider } from "../useContext/PostContext"


const IdeasPage = () => {

    const provider = useAuthContext()
    if (provider.user) {
        return (
            <div>
                <PostContextProvider>
                    <Header display={true} />
                    <div className=" w-[60%] mx-auto ">
                        <div className="mt-28 flex justify-center ">
                            <PostInput user={provider.user} />
                        </div>
                        <div className="mt-20">
                            <Posts />
                        </div>

                    </div>
                </PostContextProvider>
            </div>

        )
    }


}

export default IdeasPage