import React, { useState } from "react";
import { Text, Collapse, Button } from "@chakra-ui/core";
import Dante from "Dante2";

import "./NewNews.css";
import TextareaElement from "../../shared/components/FormElements/TextareaElement";

const NewNews = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [show, setShow] = React.useState(false);

  const changeState = (event) => {
    event.preventDefault();
    setIsLoad(!isLoad);
  };

  const handleToggle = () => setShow(!show);

  const getInfo = () => {
    const el = document.getElementsByTagName("body")[0].innerHTML;
    console.log(el);
  };

  return (
    <React.Fragment>
      <div className="news-container">
        <div className="news-container__content">
          <Text
            color="gray.600"
            fontSize={["4sm", "4md", "4lg", "4xl"]}
            fontWeight="700"
            textAlign="center"
          >
            Новини
            <span role="img" aria-label="logo">
              ⚡️
            </span>
          </Text>
          <TextareaElement
            startingHeight={0}
            isOpen={show}
            weight={300}
            size={["5sm", "5md", "5lg", "5xl"]}
            placeholder="Напишіть свій заголовок..."
          />
          <Dante></Dante>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewNews;
