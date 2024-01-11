import { createContext, useState } from "react"
import { useEffect } from "react"

export type userType = {
    username: string
    token: string
}

type AuthContextType = {
    user: userType | null
    setUser: React.Dispatch<React.SetStateAction<userType | null>>
}


export const AuthContext = createContext<AuthContextType | null>(null)



export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<null | userType>(null)

    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem('user') ?? 'null')
        if (temp) setUser(temp)
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}