import { RouterProvider } from "react-router-dom";
import {Router} from "./router/Router";

import "./App.css";

function App() {
  
  return (
    <>
      <h1>Travel App</h1>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
