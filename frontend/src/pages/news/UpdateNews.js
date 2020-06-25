import React, { useState, useContext } from "react";
import { Button } from "@chakra-ui/core";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";

const UpdateNews = () => {
  const [fields, setFields] = useState([{ value: null, type: "text" }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null, type: "text" });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const newsSubmitHandler = (event) => {
    console.log(
      fields.map((el) => {
        return {
          el,
        };
      })
    );
  };

  return (
    <div className="App">
      <Button variantColor="green" onClick={newsSubmitHandler}>
        Публікувати
      </Button>

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <textarea
              type="text"
              placeholder="Enter text"
              onChange={(e) => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleRemove(idx)}>
              Видалити
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => handleAdd()}>
        Додати елемент
      </button>
    </div>
  );
};

export default UpdateNews;
