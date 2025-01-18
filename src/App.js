import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddressNotFound from "./404/AddressNotFound.js";
import LandingLayout from "./layouts/LandingLayout";
import Home from "./home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingLayout bgColor="bg-gray-900">
              <h1 className="text-white text-center font-bold text-4xl p-4">
                Welcome to Fortune cookie
              </h1>
              <Home />
            </LandingLayout>
          }
        />
        <Route
          path="*"
          element={
            <LandingLayout bgColor="">
              <AddressNotFound />
            </LandingLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
