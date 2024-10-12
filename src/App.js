import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/Login.js";
import Signup from "./signup/Signup.js";
import Dashboard from "./dashboard/Dashboard.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<div className="text-blue-500 text-fuchsia-800">home</div>}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
