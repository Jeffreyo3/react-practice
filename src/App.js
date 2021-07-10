import React, { useState } from 'react';
import './App.css';
import Body from './components/Body'
import AnimeQuotes from './components/AnimeQuotes';
import NameForm from './components/NameForm'


const defaultName = "Saitama"

function App() {
  const [name, setName] = useState(defaultName)

  return (
    <div className="App">
      <header className="App-header">
       {/* <Body title={"Counter"} /> */}
       <NameForm name={name} setName={setName}/>

       <AnimeQuotes name={name}/>
       
      </header>
    </div>
  );
}

export default App;
