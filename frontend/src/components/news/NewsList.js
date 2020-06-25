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
          <button>Поширити новину</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="news-list">
      {props.items.map((news) => {
        <NewsItem
          key={news.id}
          id={news.id}
          title={news.title}
          description={news.description}
          creatorId={news.creator}
        />;
      })}
    </ul>
  );
};

export default NewsList;
