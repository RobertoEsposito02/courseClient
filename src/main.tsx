import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {NavigationProvider} from "./routes/navigationProvider";
import {AuthContextProvider} from "./app/context/authContext/authContextProvider";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
        <NavigationProvider></NavigationProvider>
    </AuthContextProvider>
  </StrictMode>,
)
