import { useState} from "react"
import axios from "axios"
import { useAuthContext } from "./useAuthContext"


export const useRegister = () => {

    const [error, setError] = useState({ nameError: '', userNameError: '', emailError: '', passwordError: '' })

    const provider = useAuthContext()

    const register = async (name: string, username: string, email: string, password: string) => {
        try {
            const res: any = await axios.post('http://localhost:5000/api/register', { name, username, email, password }, { withCredentials: true })
            setError({ nameError: '', userNameError: '', emailError: "", passwordError: "" })

            if (res.status !== 201) {
                setError(prev => ({
                    ...prev, ["emailError"]: res.data.email,
                    ['passwordError']: res.data.password,
                    ['userNameError']: res.data.username,
                    ['nameError']: res.data.name

                }))
            } else {

                //saving the user to local storage
                localStorage.setItem('user', JSON.stringify(res.data))

                //updating the authentication context
                provider?.setUser(res.data)
                console.log(provider)


            }
        } catch (err) {
            console.log("There was an error")
        }
    }

    return { register, error }
}