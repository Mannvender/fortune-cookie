import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/Login.js";
import Signup from "./signup/Signup.js";
import Dashboard from "./dashboard/Dashboard.js";
import AddressNotFound from "./404/AddressNotFound.js";
import LandingLayout from "./layouts/LandingLayout";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingLayout bgColor="bg-dark-600">
              <div className="text-white text-center p-4">
                Welcome to Split Wiser
              </div>
            </LandingLayout>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <LandingLayout bgColor="">
              <Login />
            </LandingLayout>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <LandingLayout bgColor="">
              <Signup />
            </LandingLayout>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <LandingLayout bgColor="bg-red-600">
              <AddressNotFound />
            </LandingLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
