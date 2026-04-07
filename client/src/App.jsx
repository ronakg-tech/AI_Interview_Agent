import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Interview from "./Pages/InterviewPage";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import InterviewReports from "./Pages/InterviewReports";
import InterviewHistory from "./Pages/InterviewHistory";
import Pricing from "./Pages/Pricing";
export const ServerURL = "https://ai-interview-agent-2.onrender.com";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getuser = async () => {
      try {
        const response = await axios.get(ServerURL + "/api/user/current-user", {
          withCredentials: true,
        });
        dispatch(setUserData(response.data));
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      }
    };
    getuser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/history" element={<InterviewHistory />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/report/:id" element={<InterviewReports />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
