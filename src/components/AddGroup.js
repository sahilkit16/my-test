import React, { useState } from "react";
import { useStateValue } from "../state";

const AddGroup = () => {
  const [{ users }, dispatch] = useStateValue();
  const [inputs, changeInput] = useState({
    name: "",
    friends: []
  });

  const handleChange = e => {
    changeInput({
      ...inputs,
      [e.target.id]: e.target.value
    });
  };

  const handleCheck = e => {
    const friends = [...inputs.friends];
    const friendID = +e.target.value;

    if (e.target.checked) {
      friends.push(friendID);
    } else {
      friends.splice(friends.indexOf(friendID), 1);
    }

    console.log(friends);

    changeInput({
      ...inputs,
      friends
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: "ADD_GROUP",
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

      {users.map(user => (
        <div>
          <label key={user.id}>
            <input
              type="checkbox"
              value={user.id}
              name="friends"
              onChange={handleCheck}
            />
            {user.name}
          </label>
        </div>
      ))}

      <button>Save</button>
    </form>
  );
};

export default AddGroup;
