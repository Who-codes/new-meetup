import React, { useState } from "react";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import AddMeetup from "./pages/AddMeetup";
import Signin from "./pages/Signin";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";

const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/add-meetup" element={<AddMeetup />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
