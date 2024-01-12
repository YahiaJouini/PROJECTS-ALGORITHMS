import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import IdeasPage from './pages/IdeasPage'
const App = () => {
  return (

    <Routes>
      <Route path="/main" element={<Home />} />
      <Route path="/bright_ideas" element={<IdeasPage />} />
    </Routes>
  )
}

export default App