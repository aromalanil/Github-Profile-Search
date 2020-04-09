import React, { useState } from "react";

const Form = (props) => {
  const [userName, setUserName] = useState("");

  function handleForm(event) {
    event.preventDefault();
    if(userName){
      props.onSubmit(userName);
    }
    else{
      alert("Please enter the Username");
    }
    setUserName("");
  }
  return (
    <form onSubmit={handleForm} className="search-form">
      <input
        placeholder="Github Username"
        className="text-input"
        type="text"
        name="username"
        id="username"
        value={userName}
        onChange={(event)=>setUserName(event.target.value)}
      />
      <button className="btn" type="submit">Search</button>
    </form>
  );
};

export default Form;
