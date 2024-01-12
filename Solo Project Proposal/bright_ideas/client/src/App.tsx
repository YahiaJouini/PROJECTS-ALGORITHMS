import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import IdeasPage from './pages/IdeasPage'
import { useAuthContext } from "./hooks/useAuthContext"
import UserData from "./pages/UserData"
const App = () => {

  const provider = useAuthContext()
  return (

    <Routes>
      <Route path="/" element={!provider.user ? <Home /> : <Navigate to='/bright_ideas' />} />
      <Route path="/bright_ideas" element={provider.user ? <IdeasPage /> : <Navigate to='/' />} />
      <Route path='/user/:id' element={provider.user ? <UserData /> : <Navigate to="/" />} />
    </Routes>
  )
}

export default App