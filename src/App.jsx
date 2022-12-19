import React, { useState } from "react";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import AddMeetup from "./pages/AddMeetup";
import Signin from "./pages/Signin";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/add-meetup" element={<AddMeetup />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
