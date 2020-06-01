import React, { useState } from "react";
import { Text, Textarea } from "@chakra-ui/core";

import "./NewNews.css";

const NewNews = (props) => {
  const [scrollHeight, setScrollHeight] = useState(6);

  const handleChangeHeight = (e) => {
    e.preventDefault();
    const t = e.target;
    t.style.height = "auto";
    t.style.height = `${t.scrollHeight}px`;
    setScrollHeight({ value: t.value });
  };

  return (
    <React.Fragment>
      <Text
        color="gray.600"
        fontSize="2rem"
        fontWeight="700"
        textAlign="center"
      >
        Новини
        <span role="img" aria-label="logo">
          ⚡️
        </span>
      </Text>
      <Textarea
        placeholder="Here is a sample placeholder"
        border="none"
        height="auto"
        onChange={handleChangeHeight}
        _hover="none"
      />
    </React.Fragment>
  );
};

export default NewNews;
