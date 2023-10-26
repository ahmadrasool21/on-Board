import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../View/MainLayout";
import Profile from "../View/Profile";
import Join from "../View/Join";
import Register from "../View/Register";
import CompleteProfile from "../View/CompleteProfile";

export default function Routing() {
  //   const [isAuthenticated, setIsAuthenticated] = useState();
  //   const [isorder, setisorder] = useState(false);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainLayout>
                <Join />
              </MainLayout>
            }
          />
          <Route
            exact
            path="/Register"
            element={
              <MainLayout>
                <Register />
              </MainLayout>
            }
          />
          <Route
            exact
            path="/Profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />

          <Route
            exact
            path="/AddProfile"
            element={
              <MainLayout>
                <CompleteProfile />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
