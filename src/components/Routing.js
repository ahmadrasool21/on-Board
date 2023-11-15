// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainLayout from "../View/MainLayout";
// import Profile from "../View/Profile";
// import Join from "../View/Join";
// import Register from "../View/Register";
// import CompleteProfile from "../View/CompleteProfile";

// export default function Routing() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route
//             exact
//             path="/"
//             element={
//               <MainLayout header="Already have an account?" sign="Sign Up">
//                 <Join />
//               </MainLayout>
//             }
//           />
//           <Route
//             exact
//             path="/Register"
//             element={
//               <MainLayout header="Personal Info" sign=" ">
//                 <Register />
//               </MainLayout>
//             }
//           />
//           <Route
//             exact
//             path="/Profile"
//             element={
//               <MainLayout header="Residency Info" sign=" ">
//                 <Profile />
//               </MainLayout>
//             }
//           />

//           <Route
//             exact
//             path="/AddProfile"
//             element={
//               <MainLayout header="Bank Verification" sign=" ">
//                 <CompleteProfile />
//               </MainLayout>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../View/MainLayout";
import Profile from "../View/Profile";
import Join from "../View/Join";
import Register from "../View/Register";
import CompleteProfile from "../View/CompleteProfile";

const withMainLayout = (header, sign, Component) => {
  return (
    <MainLayout header={header} sign={sign}>
      <Component />
    </MainLayout>
  );
};

export default function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={withMainLayout(
              "Already have an account?",
              "Sign Up",
              Join
            )}
          />
          <Route
            exact
            path="/Register"
            element={withMainLayout("Personal Info", " ", Register)}
          />
          <Route
            exact
            path="/Profile"
            element={withMainLayout("Residency Info", " ", Profile)}
          />
          <Route
            exact
            path="/AddProfile"
            element={withMainLayout("Bank Verification", " ", CompleteProfile)}
          />
        </Routes>
      </div>
    </Router>
  );
}
