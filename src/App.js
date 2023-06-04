import React, { useEffect, useState } from "react";
import InputForm from "./components/UserInput/InputForm";
import UserDetails from "./components/UserDisplay/UserDetails";
import Navigation from "./components/UI/Navigation";

function App() {
  const [users, setUsers] = useState([]);
  const [formSubmitted, setformSubmitted] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userLists"));
    if (storedUsers && storedUsers.length > 0) {
      setUsers(storedUsers);
    }
  }, []);

  const submitInputFormHandler = (userName, userPhone, userLocation) => {
    console.log(users);
    setformSubmitted(true);
    setUsers((prevState) => {
      return [
        ...prevState,
        {
          name: userName,
          phone: userPhone,
          location: userLocation,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const backHandler = () => {
    setformSubmitted(false);
  };
  useEffect(() => {
    localStorage.setItem("userLists", JSON.stringify(users));
  }, [users]);

  const switchUserDetailsPageHandler = (value) => {
    setformSubmitted(value);
  };

  const deleteDataHandler = (user) => {
    console.log("Usersss=", user);
    setDeleteUser(true);
    setUsers(user);
  };
  return (
    <Navigation>
      <main>
        {!formSubmitted && (
          <InputForm
            title="ENTER USER DETAILS"
            onSubmitInputForm={submitInputFormHandler}
            onUserDetailsPage={switchUserDetailsPageHandler}
          />
        )}
        {formSubmitted && (
          <UserDetails
            title="USER DETAILS"
            userList={users}
            onBack={backHandler}
            onDeleteData={deleteDataHandler}
            deleteFlag={deleteUser}
            setUsers={setUsers}
          />
        )}
      </main>
    </Navigation>
  );
}

export default App;
