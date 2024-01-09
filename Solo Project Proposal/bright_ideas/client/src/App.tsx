import { Routes,Route } from "react-router-dom"
import Home from './pages/Home'
const App = () => {
  return (
    <div className="flex flex-col bg-[#f3f3f3] min-h-screen p-20">
      
      <Routes>
        <Route path="/main" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App