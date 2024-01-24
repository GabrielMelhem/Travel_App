import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";

import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <h1>Travel App</h1>
      <AuthContextProvider>
        <RouterProvider router={Router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
