import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Root from "../root/Root";
import ErrorPage from "../pages/error/ErrorPage";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
  
);


