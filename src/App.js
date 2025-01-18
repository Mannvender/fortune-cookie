import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddressNotFound from "./404/AddressNotFound.js";
import LandingLayout from "./layouts/LandingLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingLayout bgColor="bg-dark-600">
              <div className="text-center p-4">Welcome to Fortune cookie</div>
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
