import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import SignIn from "./components/SignIn/SingIn";
import SignUp from "./components/SignUp/SingUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Chatbot from "./components/SankalpAI/Chatbot";
import KkhelKhelMein from "./components/KhelKhelMein/KhelKhelMein";
import Hangman from "./components/KhelKhelMein/Hangman/Hangman";

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
        <Route path="/khelkhelmein" element={<KkhelKhelMein />} />
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </Router>
  );
}

export default App;
