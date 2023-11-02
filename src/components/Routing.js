import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../View/MainLayout";
import Profile from "../View/Profile";
import Join from "../View/Join";
import Register from "../View/Register";
import CompleteProfile from "../View/CompleteProfile";

export default function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainLayout header="Already have an account?" sign="Sign In">
                <Join />
              </MainLayout>
            }
          />
          <Route
            exact
            path="/Register"
            element={
              <MainLayout header="Personal Info" sign=" ">
                <Register />
              </MainLayout>
            }
          />
          <Route
            exact
            path="/Profile"
            element={
              <MainLayout header="Residency Info" sign=" ">
                <Profile />
              </MainLayout>
            }
          />

          <Route
            exact
            path="/AddProfile"
            element={
              <MainLayout header="Bank Verification" sign=" ">
                <CompleteProfile />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
