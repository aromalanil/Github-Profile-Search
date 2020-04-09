import React, { useState } from "react";
import "./App.css";
import Form from './components/Form';
import CardList from './components/CardList';

const App = () => {
  const [profileList, setProfileList] = useState([]);

  async function addCard(userName) {
    let jsonResponse = await fetch(`https://api.github.com/users/${userName}`).then(res => res.json());
    
    if (!profileList.includes(jsonResponse)) {
      let newProfileList = [jsonResponse,...profileList];
      setProfileList(newProfileList);
    }
  }
  return (
    <main>
      <h1 className="title">GitHub Profile Search</h1>
      <Form onSubmit={addCard} />
      <CardList profileList={profileList} />
    </main>
  )
}

export default App;
