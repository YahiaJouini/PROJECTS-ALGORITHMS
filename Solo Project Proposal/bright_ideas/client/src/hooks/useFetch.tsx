import { useState } from "react";
import { postType } from "../useContext/PostContext";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useFetch = () => {
    const provider = useAuthContext()
    const [postData, setData] = useState<postType[] | []>([])
    const fetch = async () => {
        try {
            const res: any = await axios.get('http://localhost:5000/api/getPosts',
                {
                    params:
                        { authorization: `Bearer ${provider.user?.token}` }
                })
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    return { fetch, postData }
}