import React, { useState } from "react";

import "./NewsItem.css";

const NewsItem = (props) => {
  const [values, setValues] = useState({ val: [] });

  function createInputs() {
    return values.val.map((el, i) => (
      <div key={i}>
        <input type="button" value="add more" onClick={addClick} />
        <input type="text" value={el || ""} onChange={handleChange.bind(i)} />
        <input type="button" value="remove" onClick={removeClick.bind(i)} />
      </div>
    ));
  }

  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = event.target.value;
    setValues({ val: vals });
  }

  const addClick = () => {
    setValues({ val: [...values.val, ""] });
  };

  const removeClick = (event) => {
    let vals = [...values.val];
    vals.pop();
    setValues({ val: vals });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(values.val);
  };

  return (
    <div className="news-form">
      <form
        onSubmit={handleSubmit}
        className="input"
        className="news-form__form"
      >
        <input
          type="button"
          value="add more"
          onClick={addClick}
          className="news-form__add-button"
        />
        <input type="submit" value="Submit" className="news-form__submit" />
        {createInputs()}
      </form>
    </div>
  );
};
export default NewsItem;
