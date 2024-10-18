import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import CaregiversSeniorLogin from "./pages/CaregiversSeniorLogin";
import VolunteerLogin from "./pages/VolunteerLogin";
import AdminLogin from "./pages/AdminLogin";
import CaregiversSeniorRegister from "./pages/CaregiversSeniorRegister";
import VolunteerRegister from "./pages/VolunteerRegister";
// import VolunteerLogin from './Pages/VolunteerLogin';
// import VolunteerRegister from './Pages/VolunteerRegister';
// import VolunteerPage from './Pages/VolunteerPage';
// import UserLogin from './Pages/Userlogin';
// import UserRegister from './Pages/UserRegister';
// import AdminLogin from './Pages/AdminLogin';
// import AdminRegister from './Pages/AdminRegister';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/volunteer-login" element={<VolunteerLogin />} />
        <Route path="/volunteer-register" element={<VolunteerRegister/>}/>
        <Route path="/volunteer-page" element={<VolunteerPage/>}/>
        <Route path="/user-login" element={<UserLogin/>}/>
        <Route path="/user-register" element={<UserRegister/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/admin-register" element={<AdminRegister/>}/> */}
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Login Routes */}
        <Route path="/login/caregivers-senior" element={<CaregiversSeniorLogin />} />
        <Route path="/login/volunteer" element={<VolunteerLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />

        {/* Register Routes */}
        <Route path="/register/caregivers-senior" element={<CaregiversSeniorRegister />} />
        <Route path="/register/volunteer" element={<VolunteerRegister />} />
      </Routes>
    </Router>
  );
};

export default App;