import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./modals/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Video from "./components/Video";
import { Typography } from "@mui/material";
import Registration from "./components/Registration";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <BrowserRouter>
      <Navigation openLoginModal={handleOpenLoginModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/video" element={<Video />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="*"
          element={
            <Typography variant="h2" fontWeight={700} color="white">
              Not found!
            </Typography>
          }
        />
      </Routes>

      <Login
        loginModalOpen={loginModalOpen}
        closeLoginModal={handleCloseLoginModal}
      />
    </BrowserRouter>
  );
}

export default App;
