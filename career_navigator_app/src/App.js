import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import SignIn from "./components/SignIn/SingIn";
import SignUp from "./components/SignUp/SingUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Chatbot from "./components/SankalpAI/Chatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
