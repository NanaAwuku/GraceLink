import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Register from "./pages/Registration/Registation";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
