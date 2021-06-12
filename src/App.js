import React from 'react';
import "./App.css";
import Input from './Components/Input';
import Background from './Components/Background';
import DataLayer from './AppContext';

function App(){
  return(
    <DataLayer >
    <div className="app">
      <Input />
      <Background />
    </div>
    </DataLayer>
  );
}

export default App;