import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom"
const Header = () => {

    const provider = useAuthContext()
    const navigate = useNavigate()

    const { logout } = useLogout()

    return (
        <header className="">
            <nav className="flex justify-between items-center w-[60%] m-auto py-10">
                <h1>{provider.user ? `Hi ${provider.user.username} !` : 'Hi !'}</h1>
                <div className="w-[270px] flex justify-between ">

                    <Link to='#' className="text-[18px] font-semibold tracking-wide">Bright ideas</Link>
                    <button
                        className="text-[20px] font-semibold tracking-wide"
                        onClick={() => {
                            logout()
                            navigate('/main')
                            
                            }}>
                        Logout
                    </button>

                </div>
            </nav>
        </header>
    )
}

export default Header