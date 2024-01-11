import { createContext, useState } from "react"

export type userType = {
    email: string
    token: string
}

type AuthContextType = {
    user: userType | null
    setUser: React.Dispatch<React.SetStateAction<userType | null>>
}


export const AuthContext = createContext<AuthContextType | null>(null)



export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<null | userType>(null)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}