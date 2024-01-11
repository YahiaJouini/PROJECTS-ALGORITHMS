import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './useContext/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </AuthContextProvider>
)
