import Register from "../components/Register"
import Login from "../components/Login"
const Home = () => {
    return (
        <div>
            <h1>Welcome ! </h1>
            <div className="flex w-full justify-between">
                
                <Register />
                <Login />

            </div>
        </div>
    )
}

export default Home