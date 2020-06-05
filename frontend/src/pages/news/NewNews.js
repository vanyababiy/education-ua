import React, { useState } from "react";
import {
  Text,
  Input,
  IconButton,
  Icon,
  Collapse,
  Button,
} from "@chakra-ui/core";

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
            fontSize={["2sm", "2md", "2lg", "2xl"]}
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
            weight={400}
            size={["3sm", "3md", "3lg", "3xl"]}
            placeholder="Напишіть свій заголовок..."
          />
          <div className="odd">
            <Button
              size="sm"
              onClick={handleToggle}
              mt="1rem"
              isInline
              isLoading={isLoad}
            ></Button>
            <Collapse startingHeight={0} isOpen={show}>
              <TextareaElement
                startingHeight={0}
                isOpen={show}
                weight={400}
                w="100%"
                size={["1.5sm", "1.5md", "1.5lg", "1.5xl"]}
                placeholder="Напишіть свою новину..."
              />
            </Collapse>
          </div>
          <Button onClick={getInfo}>text</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewNews;
