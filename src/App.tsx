import { Route, Routes } from "react-router-dom";

import { Login } from "./features/login";
import SignUp from "./features/signup/SignUp";

function App() {
  return (
    <Routes>
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
