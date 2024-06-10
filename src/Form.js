import React from "react";

const Form = ({ name, email }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted with name:", name, "and email:", email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login Page</h3>
        <input type="text" placeholder="Name" value={name} readOnly />
        <br />
        <br />
        <input type="email" placeholder="Email" value={email} readOnly />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
