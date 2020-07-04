import React, { useContext, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Button, Box, Icon } from "@chakra-ui/core";

import ReactS3Uploader from "react-s3-uploader-multipart";
import Dante from "Dante2";

import "./NewNews.css";
import TextareaElement from "../../shared/components/FormElements/TextareaElement";

import { AuthContext } from "../../shared/context/auth-context";

const NewNews = () => {
  const auth = useContext(AuthContext);
  const [fields, setFields] = useState([]);

  function handleChange(idx, e) {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    const values = [...fields];
    values[idx].value = e.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: "", type: "text" });
    setFields(values);
  }

  function handleRemove() {
    const values = [...fields];
    values.pop();
    setFields(values);
  }

  const history = useHistory();

  const newsSubmitHandler = (event) => {
    event.preventDefault();

    const title = document.getElementById("news-container__title").value;

    Axios.post("http://localhost:5000/news", {
      title: title,
      description: fields,
      creator: auth.userId,
    })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div className="news-container">
        <div className="news-container__content">
          <TextareaElement
            id="news-container__title"
            startingHeight={0}
            weight={600}
            size={["4sm", "4md", "4lg", "4xl"]}
            placeholder="Напишіть заголовок..."
          />
          <Dante />
          {fields.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`}>
                <textarea
                  className="news-container__text-element"
                  placeholder="Напишіть текст..."
                  onChange={(e) => handleChange(idx, e)}
                />
              </div>
            );
          })}
        </div>
        <Box flexDirection="row">
          <Button
            type="button"
            variantColor="green"
            variant="ghost"
            onClick={() => handleAdd()}
          >
            Текст
          </Button>

          <Button
            type="button"
            variant="ghost"
            variantColor="green"
            onClick={() => handleAdd()}
          >
            Image
          </Button>
        </Box>
        <Box flexDirection="row">
          <Button
            type="button"
            variantColor="red"
            w="auto"
            onClick={() => handleRemove()}
          >
            <Icon name="delete" size="24px" />
          </Button>
          <Button ml="50px" variantColor="green" onClick={newsSubmitHandler}>
            Публікувати
          </Button>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default NewNews;
// const addTextAreaElementHandler = () => {
//   let el = `<textarea classname='news-container__element'></textarea>`;
//   console.log(el);

//   const addElement = (document.getElementsByClassName(
//     "news-container__content"
//   )[0].innerHTML += el);
//   setDescription(addElement.value);
//   console.log(description);
// };

// const addImageAreaElementHandler = () => {
//   let el = `<input type="file" accept=".jpg,.png,.jpeg" />`;
//   const addElement = (document.getElementsByClassName(
//     "news-container__content"
//   )[0].innerHTML += el);
// };

// const changeInputHandler = (event) => {
//   setDescription(event.target.value);
// };
