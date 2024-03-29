import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {


    const [error, setError] = useState({ emailError: "", passwordError: "", fieldError: "" })

    const provider = useAuthContext()
    const navigate = useNavigate()

    const Login = async (LoginEmail: string, LoginPassword: string) => {

        try {
            const res: any = await axios.post('http://localhost:5000/api/loginUser', { LoginEmail, LoginPassword }, { withCredentials: true })
            if (res.status !== 201) {
                setError({ emailError: res.data.email, passwordError: res.data.password, fieldError: res.data.fields })
            } else {


                //saving the user to local storage
                localStorage.setItem('user', JSON.stringify(res.data))

                //updating the authentication context
                provider?.setUser(res.data)
                console.log(provider)

                navigate('/bright_ideas')

            }

        } catch (err) {
            console.log("The was an error")
        }
    }
    return { Login, error }
}