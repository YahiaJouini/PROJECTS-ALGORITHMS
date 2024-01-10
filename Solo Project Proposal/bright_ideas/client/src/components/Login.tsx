import { useState } from "react"
import axios from "axios"

const Login = () => {
    const LoginData = {
        email: "",
        password: ""
    }
    const [login, setLogin] = useState(LoginData)
    const [error, setError] = useState({ email: "", password: "" })

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name
        setLogin(prev => ({ ...prev, [name]: value }))
    }

    const HandleErrorDisplay = () => {

        if (error.password && !error.email) {
            return (
                error.password
            )
        }
        return (
            error.email
        )
    }

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res: any = await axios.post('http://localhost:5000/api/signup', login, { withCredentials: true })
            setError({ email: "", password: "" })

            if (res.status !== 201) {
                setError(prev => ({ ...prev, ["email"]: res.data.email, ['password']: res.data.password }))
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="w-[40%] shadow-xl bg-white p-10 rounded-lg ">

            <form className="w-[70%] m-auto" onSubmit={HandleSubmit}>

                <h3 className="mb-6 font-medium">Login in</h3>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        value={login.email}
                        onChange={HandleChange}
                        name='email'

                    />

                </div>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        value={login.password}
                        onChange={HandleChange}
                        name="password"
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