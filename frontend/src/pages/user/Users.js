import React from "react";

import UsersList from "../../components/user/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John",
      image:
        "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
      news: 4,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
