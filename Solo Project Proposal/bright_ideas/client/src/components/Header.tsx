import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useNavigate } from "react-router-dom"
import RenderText from "./RenderText"
import { useAuthContext } from "../hooks/useAuthContext"
RenderText
const Header = ({ display }: { display?: boolean }) => {

    const navigate = useNavigate()
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <header>
            <nav className="flex justify-between items-center w-[60%] m-auto py-10">
                <h1>Hi! {user?.id ? <RenderText id={user?.id} name={true} /> : ""} </h1>
                <div className={`w-[270px] flex ${display !== true ? "justify-between" : "justify-end"} `}>
                    {display !== true && (
                        <Link to='/bright_ideas' className="text-[18px] font-semibold tracking-wide">Bright ideas</Link>
                    )}
                    <button
                        className="text-[20px] font-semibold tracking-wide"
                        onClick={() => {
                            logout()
                            navigate('/')
                        }}>
                        Logout
                    </button>

                </div>
            </nav>
        </header>
    )
}

export default Header