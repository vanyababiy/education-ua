import React, { useState } from "react";
import { Textarea } from "@chakra-ui/core";

const TextareaElement = (props) => {
  let [scrollHeight, setScrollHeight] = useState(0);

  const handleChangeHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <Textarea
      id={props.id}
      focusBorderColor="0"
      fontSize={["sm", "md", "lg", "xl"]}
      placeholder={props.placeholder}
      height="auto"
      fontSize={props.size}
      fontWeight={props.weight}
      onChange={handleChangeHeight}
      className="news-container__element"
      borderStyle="none"
    ></Textarea>
  );
};

export default TextareaElement;
