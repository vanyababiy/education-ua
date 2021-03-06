import React from "react";
import { Link } from "react-router-dom";

import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/news`}>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.newsCount} {"News"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
