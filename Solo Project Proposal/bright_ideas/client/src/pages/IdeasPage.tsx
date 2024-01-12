import PostInput from "../components/PostInput"
import Header from "../components/Header"
import Posts from "../components/Posts"


import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom"


const IdeasPage = () => {

    const provider = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!provider.user) {
            navigate('/main')
        }
    }, [])

    return (
        <div>
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
        </div>

    )
}

export default IdeasPage