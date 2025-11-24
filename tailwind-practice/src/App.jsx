import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forms from "./pages/Forms";

import Dashboardpage from "./pages/Dasboardpage";
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forms" element={<Forms />} />
         
          <Route path="/dashboard/*" element={<Dashboardpage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
