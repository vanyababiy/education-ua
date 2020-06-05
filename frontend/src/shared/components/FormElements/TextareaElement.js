import React, { useState } from "react";
import { Textarea } from "@chakra-ui/core";

const TextareaElement = (props) => {
  let [scrollHeight, setScrollHeight] = useState(0);

  const handleChangeHeight = (e) => {
    e.preventDefault();
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    console.log(scrollHeight);
    setScrollHeight({ value: e.target.value });
  };

  //return the caret position of the textarea
  HTMLTextAreaElement.prototype.getCaretPosition = function () {
    return this.selectionStart;
  };
  //change the caret position of the textarea
  HTMLTextAreaElement.prototype.setCaretPosition = function (position) {
    this.selectionStart = position;
    this.selectionEnd = position;
    this.focus();
  };
  //if the textarea has selection then return true
  HTMLTextAreaElement.prototype.hasSelection = function () {
    if (this.selectionStart === this.selectionEnd) {
      return false;
    } else {
      return true;
    }
  };
  //return the selection text
  HTMLTextAreaElement.prototype.getSelectedText = function () {
    return this.value.substring(this.selectionStart, this.selectionEnd);
  };
  //change the selection area of the textarea
  HTMLTextAreaElement.prototype.setSelection = function (start, end) {
    this.selectionStart = start;
    this.selectionEnd = end;
    this.focus();
  };

  var textarea = document.getElementsByTagName("textarea")[1];

  //   const handleTabPressed = (event) => {
  //tab was pressed
  // if (event.keyCode === 9) {
  //   event.preventDefault();
  //   var newCaretPosition;
  //   newCaretPosition = textarea.getCaretPosition() + "    ".length;
  //   textarea.value =
  //     textarea.value.substring(0, textarea.getCaretPosition()) +
  //     "    " +
  //     textarea.value.substring(
  //       textarea.getCaretPosition(),
  //       textarea.value.length
  //     );
  //   textarea.setCaretPosition(newCaretPosition);
  //   return false;
  // }
  //backspace
  // if (event.keyCode === 8) {
  //   if (
  //     textarea.value.substring(
  //       textarea.getCaretPosition() - 4,
  //       textarea.getCaretPosition()
  //     ) === "    "
  //   ) {
  //     //it's a tab space
  //     // var newCaretPosition;
  //     newCaretPosition = textarea.getCaretPosition() - 3;
  //     textarea.value =
  //       textarea.value.substring(0, textarea.getCaretPosition() - 3) +
  //       textarea.value.substring(
  //         textarea.getCaretPosition(),
  //         textarea.value.length
  //       );
  //     textarea.setCaretPosition(newCaretPosition);
  //   }
  // }
  // //left arrow
  // if (event.keyCode === 37) {
  //   event.preventDefault();
  //   //   var newCaretPosition;
  //   if (
  //     textarea.value.substring(
  //       textarea.getCaretPosition() - 4,
  //       textarea.getCaretPosition()
  //     ) === "    "
  //   ) {
  //     //it's a tab space
  //     newCaretPosition = textarea.getCaretPosition() - 3;
  //     textarea.setCaretPosition(newCaretPosition);
  //   }
  // }

  // //right arrow
  // if (event.keyCode === 39) {
  //   event.preventDefault();
  //   //   var newCaretPosition;
  //   if (
  //     textarea.value.substring(
  //       textarea.getCaretPosition() + 4,
  //       textarea.getCaretPosition()
  //     ) === "    "
  //   ) {
  //     //it's a tab space
  //     newCaretPosition = textarea.getCaretPosition() + 3;
  //     textarea.setCaretPosition(newCaretPosition);
  //   }
  // }

  return (
    <Textarea
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
