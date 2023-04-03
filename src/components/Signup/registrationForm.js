import React, { useState } from "react";

import { database } from "../../firebase";
import { ref, push } from "firebase/database";

import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./signup.css";
const RegistrationForm = () => {
  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);

  const [dateofBirth, setDob] = useState(new Date());
  const [occupation, setOccupation] = useState(null);
  const [company, setCompany] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "secondName") {
      setSecondName(value);
    }
    if (id === "dateofBirth") {
      setDob(value);
    }
    if (id === "occupation") {
      setOccupation(value);
    }
    if (id === "company") {
      setCompany(value);
    }
  };

  const handleDateChange = (date) => {
    setDob(date);
  };

  const handleSubmit = () => {
    // console.log(firstName, secondName, dateofBirth, occupation, company);
    let obj = {
      firstName: firstName,
      secondName: secondName,
      dateofBirth: dateofBirth.toDateString(),
      occupation: occupation,
      company: company,
    };

    // setting location (users) for pushing data
    const usersRef = ref(database, "users");

    // checking whether user enter firstName
    // if yes then
    // pushing data to database
    // also navigate to /users route
    if (obj?.firstName) {
      push(usersRef, obj);
      navigate("/users");
    }

    console.log("hello", "running", obj);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="secondname">
          <label className="form__label" for="lastName">
            Second Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="secondName"
            value={secondName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="secondName"
          />
        </div>

        <div className="dob">
          <label className="form__label" htmlFor="dateofBirth">
            Date Of Birth:{" "}
          </label>
          <ReactDatePicker
            className="form__input"
            selected={dateofBirth}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            id="dateofBirth"
            placeholderText="Select date"
          />
        </div>
        <div className="work">
          <label className="form__label" for="occupation">
            My Occupation{" "}
          </label>
          <input
            className="form__input"
            name=""
            type="text"
            id="occupation"
            value={occupation}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter your occupation"
          />
        </div>
        <div className="comp">
          <label className="form__label" for="company">
            Company{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="company"
            value={company}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter your company"
          />
        </div>
        <div className="footer">
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="footer"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
