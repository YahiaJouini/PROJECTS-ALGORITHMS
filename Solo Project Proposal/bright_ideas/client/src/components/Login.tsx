import { useState } from "react"
import axios from "axios"

const Login = () => {
    const LoginData = {
        LoginEmail: "",
        LoginPassword: ""
    }
    const [login, setLogin] = useState(LoginData)
    const [error, setError] = useState({ emailError: "", passwordError: "" })

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name
        setLogin(prev => ({ ...prev, [name]: value }))
    }

    const HandleErrorDisplay = () => {

        if (error.passwordError && !error.emailError) {
            return error.passwordError
        }
        return error.emailError
    }

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className="w-[40%] shadow-xl bg-white p-10 rounded-lg ">

            <form className="w-[70%] m-auto" onSubmit={HandleSubmit}>

                <h3 className="mb-6 font-medium">Login in</h3>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="LoginEmail">Email</label>
                    <input type="email"
                        id="LoginEmail"
                        value={login.LoginEmail}
                        onChange={HandleChange}
                        name='LoginEmail'
                    />
                </div>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="LoginPassword">Password</label>
                    <input type="password"
                        id="LoginPassword"
                        value={login.LoginPassword}
                        onChange={HandleChange}
                        name="LoginPassword"
                    />

                </div>

                <button type="submit" className="w-full mt-6 ">Login</button>

            </form>

            <div className="my-2 h-[35px] p-2">
                <h4 className="text-red-400 text-center ">
                    {HandleErrorDisplay()}
                </h4>

            </div>

        </div>

    )
}

export default Login