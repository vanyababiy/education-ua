import React from "react";

import "./NewsList.css";
import Card from "../../shared/components/UIElements/Card";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="news-list center">
        <Card>
          <h2>Немає новин. Хочете створити?</h2>
          <button>Пошитири новину</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="news-list">
      {props.items.map((place) => {
        <NewsItem
          key={place.id}
          id={place.id}
          title={place.title}
          description={place.description}
          creatorId={place.creator}
        />;
      })}
    </ul>
  );
};

export default NewsList;
