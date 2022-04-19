import React from "react";
import { useStateValue } from "../state";

const Groups = () => {
  const [{ groups, users }] = useStateValue();

  return (
    <ul>
      {groups.map(group => (
        <li>
          {group.name}
          <ul>
            {users.map(user => {
              return group.friends.indexOf(user.id) !== -1 ? (
                <li>{user.name}</li>
              ) : null;
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Groups;
