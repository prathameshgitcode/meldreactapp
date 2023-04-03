import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../../firebase";

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // setting location (users) for pushing data
    const usersRef = ref(database, "users");

    // getting user data
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          for (const key in data) {
            const dataValues = data[key];
            const age = calculateAge(dataValues.dateofBirth);
            setUserData({ ...dataValues, age });
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <div style={styles.container}>
      {/* <h3>{userData?.firstName}</h3>
      <h5>{userData?.secondName}</h5>
      <p>{userData?.dateofBirth}</p>
      <p>{userData?.occupation}</p>
      <p>{userData?.company}</p> */}
      <p style={styles.text}>
        {userData?.firstName} {userData?.secondName} is {userData?.age} years
        old and working as a {userData?.occupation} in {userData?.company}.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: "80%",
    minHeight: "100vh",
  },
  text: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
};

export default Users;
