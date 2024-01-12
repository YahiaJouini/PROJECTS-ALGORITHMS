import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import IdeasPage from './pages/IdeasPage'
import { useAuthContext } from "./hooks/useAuthContext"
const App = () => {

  const provider = useAuthContext()
  return (

    <Routes>
      <Route path="/main" element={!provider.user ? <Home /> : <Navigate to='/bright_ideas' />} />
      <Route path="/bright_ideas" element={provider.user ? <IdeasPage /> : <Navigate to='/main' />} />
    </Routes>
  )
}

export default App