import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import IdeasPage from './pages/IdeasPage'
const App = () => {
  return (
    <div className="flex flex-col bg-[#f2f1f2] min-h-screen ">

      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/bright_ideas" element={<IdeasPage />} />
      </Routes>
    </div>
  )
}

export default App