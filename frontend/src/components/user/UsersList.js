import React from "react";

import "./UsersList.js";
import UserItem from "./UserItem.js";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>Користувачів немає</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          newsCount={user.news}
        />
      ))}
    </ul>
  );
};

export default UsersList;
