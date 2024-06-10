import React, { useState } from "react";
import Form from "./Form"; // Adjust the path as necessary

const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Home Page</h1>
      <Form name={name} email={email} />
    </div>
  );
};

export default HomePage;
