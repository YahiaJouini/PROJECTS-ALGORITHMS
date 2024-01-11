import Register from "../components/Register"
import Login from "../components/Login"
const Home = () => {
    return (
        <div className="p-20">

            <h1 className="text-center text-gray-800 "> Bright Ideas ! </h1>

            <div className="flex w-full justify-around mt-20 items-start">

                <Register />
                <Login />

            </div>
        </div>
    )
}

export default Home