import React, { useState } from "react";
import { Text, Textarea } from "@chakra-ui/core";

import "./NewNews.css";

const NewNews = (props) => {
  let [scrollHeight, setScrollHeight] = useState(0);
  let [scriptString, setScriptString] = useState("");

  const handleChangeHeight = (e) => {
    e.preventDefault();
    const t = e.target;
    t.style.height = "auto";
    t.style.height = `${t.scrollHeight}px`;
    setScrollHeight({ value: t.value });
  };

  HTMLTextAreaElement.prototype.getCaretPosition = function () {
    //return the caret position of the textarea
    return this.selectionStart;
  };
  HTMLTextAreaElement.prototype.setCaretPosition = function (position) {
    //change the caret position of the textarea
    this.selectionStart = position;
    this.selectionEnd = position;
    this.focus();
  };
  HTMLTextAreaElement.prototype.hasSelection = function () {
    //if the textarea has selection then return true
    if (this.selectionStart === this.selectionEnd) {
      return false;
    } else {
      return true;
    }
  };
  HTMLTextAreaElement.prototype.getSelectedText = function () {
    //return the selection text
    return this.value.substring(this.selectionStart, this.selectionEnd);
  };
  HTMLTextAreaElement.prototype.setSelection = function (start, end) {
    //change the selection area of the textarea
    this.selectionStart = start;
    this.selectionEnd = end;
    this.focus();
  };

  var textarea = document.getElementsByTagName("textarea")[0];

  const handleTabPressed = (event) => {
    if (event.keyCode === 9) {
      event.preventDefault();
      //tab was pressed
      var newCaretPosition;
      newCaretPosition = textarea.getCaretPosition() + "    ".length;
      textarea.value =
        textarea.value.substring(0, textarea.getCaretPosition()) +
        "    " +
        textarea.value.substring(
          textarea.getCaretPosition(),
          textarea.value.length
        );
      textarea.setCaretPosition(newCaretPosition);
      return false;
    }
    if (event.keyCode === 8) {
      //backspace
      if (
        textarea.value.substring(
          textarea.getCaretPosition() - 4,
          textarea.getCaretPosition()
        ) === "    "
      ) {
        //it's a tab space
        var newCaretPosition;
        newCaretPosition = textarea.getCaretPosition() - 3;
        textarea.value =
          textarea.value.substring(0, textarea.getCaretPosition() - 3) +
          textarea.value.substring(
            textarea.getCaretPosition(),
            textarea.value.length
          );
        textarea.setCaretPosition(newCaretPosition);
      }
    }
    if (event.keyCode === 37) {
      event.preventDefault();
      //left arrow
      var newCaretPosition;
      if (
        textarea.value.substring(
          textarea.getCaretPosition() - 4,
          textarea.getCaretPosition()
        ) === "    "
      ) {
        //it's a tab space
        newCaretPosition = textarea.getCaretPosition() - 3;
        textarea.setCaretPosition(newCaretPosition);
      }
    }

    if (event.keyCode === 39) {
      event.preventDefault();
      //right arrow
      var newCaretPosition;
      if (
        textarea.value.substring(
          textarea.getCaretPosition() + 4,
          textarea.getCaretPosition()
        ) === "    "
      ) {
        //it's a tab space
        newCaretPosition = textarea.getCaretPosition() + 3;
        textarea.setCaretPosition(newCaretPosition);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="news-container">
        <div className="news-container__content">
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
            focusBorderColor="0"
            fontSize={["sm", "md", "lg", "xl"]}
            placeholder="Напишіть свою новину..."
            height="auto"
            onChange={handleChangeHeight}
            onKeyDown={handleTabPressed}
            className="news-container__element"
            borderStyle="none"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewNews;
