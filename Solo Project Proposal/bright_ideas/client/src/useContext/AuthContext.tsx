import { createContext, useState } from "react"

export type userType = {
    id: string
    token: string
}

type AuthContextType = {
    user: userType | null
    setUser: React.Dispatch<React.SetStateAction<userType | null>>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const initialData: userType = JSON.parse(localStorage.getItem('user') ?? 'null') || null
    const [user, setUser] = useState<userType | null>(initialData)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}