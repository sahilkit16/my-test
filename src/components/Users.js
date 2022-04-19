import React from "react";
import { useStateValue } from "../state";

const Users = () => {
  const [{ users }] = useStateValue();

  console.log(users);
  return (
    <ul>
      {users.map(user => (
        <li>
          {user.name} {user.lastname} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Users;
