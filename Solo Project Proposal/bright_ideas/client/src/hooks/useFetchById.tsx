import { useState } from "react"
import axios from "axios"
export type userType = {
    email:string
    name:string
    password:string
    username:string
}
const useFetchById = () => {
    const [data, setData] = useState<userType | null>(null)
    const fetchById = async (id: string) => {
        try {
            const user: any = await axios.get(`http://localhost:5000/api/getUser/${id}`)
            setData(user.data)
        } catch (err) {
            console.log(err)
        }
    }
    return { fetchById, data }
}

export default useFetchById