import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import DashBoard from "./pages/DashBoard";
import { AddJob } from "./pages/AddJob";
import { JobList } from "./pages/JobList";
import { SingleJob } from "./pages/SingleJob";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/jobList" element={<JobList />} />
          <Route path="/jobList/:status" element={<JobList />} />
          <Route path="/singleJob/:jobId" element={<SingleJob />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
