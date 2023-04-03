import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/header";
import RegistrationForm from "./components/Signup/registrationForm";
import Users from "./components/Signup/Users";

function App() {
  return (
    <div className="App">
      {/* <RegistrationForm /> */}
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
