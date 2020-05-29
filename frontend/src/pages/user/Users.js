import React, { useState } from "react";

const Users = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Ти натиснув на кнопку {count} разів.</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1 ЗБІЛЬШИТИ
      </button>
    </div>
  );
};

export default Users;
