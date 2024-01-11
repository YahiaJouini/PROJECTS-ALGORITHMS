import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {


    const LoginData = {
        LoginEmail: "",
        LoginPassword: ""
    }

    const [login, setLogin] = useState(LoginData)
    const { Login, error } = useLogin()




    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name
        setLogin(prev => ({ ...prev, [name]: value }))
    }

    const HandleErrorDisplay = () => {
        if (error.fieldError) {

            return error.fieldError

        } else {
            if (error.passwordError && !error.emailError) {

                return error.passwordError

            } else {

                return error.emailError

            }
        }


    }

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        await Login(login.LoginEmail, login.LoginPassword)

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

                <button type="submit" className="w-full mt-6 disabled:bg-red-100">Login</button>

            </form>

            <div className="my-2 h-[35px] p-2">
                <h4 className="text-red-400 h-[20px] text-[16px] tracking-wide font-semibold text-center">
                    {HandleErrorDisplay()}
                </h4>

            </div>

        </div>

    )
}

export default Login