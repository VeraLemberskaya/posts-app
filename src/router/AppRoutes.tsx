import { Route, Routes } from "react-router-dom";

import { Login } from "../features/login";
import SignUp from "../features/signup/SignUp";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../constants/routesPath";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={SIGNUP_ROUTE} element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
