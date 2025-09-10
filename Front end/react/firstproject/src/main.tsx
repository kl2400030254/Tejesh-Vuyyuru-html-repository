import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
//import ListComponent from "./components/ListComponent"
// import Football from "./components/Football"


import Football from "./components/Football"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
   {/*<ListComponent /> */} 
   
   
   <Football />
     </StrictMode>
)
