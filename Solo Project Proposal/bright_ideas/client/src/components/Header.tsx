import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useNavigate } from "react-router-dom"
const Header = () => {

    const navigate = useNavigate()

    const { logout } = useLogout()

    return (
        <header className="">
            <nav className="flex justify-between items-center w-[60%] m-auto py-10">
                <h1>Hi!</h1>
                <div className="w-[270px] flex justify-between ">

                    <Link to='#' className="text-[18px] font-semibold tracking-wide">Bright ideas</Link>
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