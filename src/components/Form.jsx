import React, { useState } from "react";

const Form = (props) => {
  const [userName, setUserName] = useState("");

  function handleForm(event) {
    event.preventDefault();
    props.onSubmit(userName);
    setUserName("");
  }
  return (
    <form onSubmit={handleForm}>
      <input
        placeholder="Github Username"
        type="text"
        name="username"
        id="username"
        value={userName}
        onChange={(event)=>setUserName(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
