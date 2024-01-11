import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="">
            <nav className="flex justify-between items-center w-[60%] m-auto py-10">
                <h1>Hi oliver</h1>
                <div className="w-[220px] flex justify-between">

                    <Link to='#' className="text-[20px] font-semibold tracking-wide">Bright ideas</Link>
                    <Link to='#' className="text-[20px] font-semibold tracking-wide">Logout</Link>

                </div>
            </nav>
        </header>
    )
}

export default Header