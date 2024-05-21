import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FormSection from './components/FormSection';
import DisplaySection from './components/DisplaySection';

function App(){
  const [list, setList] = useState([]);
  return (
    <div className="App">
        <Header />
        <FormSection list={list} setList={setList} />
        <DisplaySection list={list}  setList={setList}/>
    </div>
  );
}

export default App;
