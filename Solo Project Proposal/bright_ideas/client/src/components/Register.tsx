import { useState } from "react"
import { useRegister } from "../hooks/useRegister"


const Register = () => {


    const RegisterData = {
        name: "",
        username: "",
        email: "",
        password: ""
    }


    const [login, setLogin] = useState(RegisterData)

    const { register, error } = useRegister()


    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.name
        setLogin(prev => ({ ...prev, [name]: value }))
    }


    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await register(login.name, login.username, login.email, login.password)

    }
    return (
        <div className="w-[40%] shadow-xl bg-white p-10 rounded-lg ">

            <form className="w-[70%] m-auto" onSubmit={HandleSubmit}>

                <h3 className="mb-6 font-medium">Register</h3>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="fullname">Full Name</label>
                    <input type="text"
                        id="fullname"
                        value={login.name}
                        onChange={HandleChange}
                        name='name'
                    />
                    <h4 className="text-red-400 h-[20px] text-[16px] tracking-wide font-semibold">{error.nameError}</h4>
                </div>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="username">Username</label>
                    <input type="text"
                        id="username"
                        value={login.username}
                        onChange={HandleChange}
                        name='username'
                    />
                    <h4 className="text-red-400 h-[20px] text-[16px] tracking-wide font-semibold">{error.userNameError}</h4>
                </div>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        value={login.email}
                        onChange={HandleChange}
                        name='email'
                    />
                    <h4 className="text-red-400 h-[20px] text-[16px] tracking-wide font-semibold">{error.emailError}</h4>
                </div>

                <div className="flex flex-col gap-2 mb-4">

                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        value={login.password}
                        onChange={HandleChange}
                        name="password"
                    />
                    <h4 className="text-red-400 h-[20px] text-[16px] tracking-wide font-semibold">{error.passwordError}</h4>
                </div>

                <button type="submit" className="w-full mt-6 ">Register</button>

            </form>
        </div>
    )
}

export default Register