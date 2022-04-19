import React, { useState } from "react";
import { useStateValue } from "../state";

const AddUser = () => {
  const [{ users }, dispatch] = useStateValue();
  const [inputs, changeInput] = useState({
    name: "",
    lastname: "",
    email: ""
  });

  const handleChange = e => {
    changeInput({
      ...inputs,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: "ADD_USER",
      payload: inputs
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          placeholder="Name"
          value={inputs.name}
          id="name"
          onChange={handleChange}
        />
      </p>

      <p>
        <input
          placeholder="Last Name"
          value={inputs.lastname}
          id="lastname"
          onChange={handleChange}
        />
      </p>

      <p>
        <input
          placeholder="Email"
          value={inputs.email}
          id="email"
          onChange={handleChange}
        />
      </p>

      <button>Save</button>
    </form>
  );
};

export default AddUser;
