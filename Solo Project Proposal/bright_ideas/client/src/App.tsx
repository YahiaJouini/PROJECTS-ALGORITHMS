import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import IdeasPage from './pages/IdeasPage'
import { useAuthContext } from "./hooks/useAuthContext"
import UserData from "./pages/UserData"
import PostData from "./pages/PostData"
const App = () => {

  const provider = useAuthContext()
  return (

    <Routes>
      <Route path="/" element={!provider.user ? <Home /> : <Navigate to='/bright_ideas' />} />
      <Route path="/bright_ideas" element={provider.user ? <IdeasPage /> : <Navigate to='/' />}/>
      <Route path='/user/:id' element={provider.user ? <UserData /> : <Navigate to="/" />} />
      <Route path="bright_ideas/:postId" element={provider.user ? <PostData /> : <Navigate to='/' />} />
    </Routes>
  )
}

export default App