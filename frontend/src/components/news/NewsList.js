import React from "react";

import "./NewsList.css";

const NewsList = (props) => {
    return (
        <ul className='news-list'>
            {props.news}
        </ul>
    )
};

export default NewsList;
