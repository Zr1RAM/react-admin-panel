import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from './context/darkModeContext.jsx'
import { AuthContextProvider } from './context/authContext/AuthContext.jsx'
import { MoviesContextProvider } from './context/movieContext/MovieContext.jsx'
import { ListContextProvider } from './context/listContext/ListContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <MoviesContextProvider>
          <ListContextProvider>
            <App />
          </ListContextProvider>
        </MoviesContextProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
