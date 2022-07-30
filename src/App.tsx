import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import ContentBody from "./components/ContentBody";
import {Activity, Team, User} from "./types";
let info = require('./data.json');
function App() {
  type TData = {
    teams: Array<Team>,
    activities: Array<Activity>,
    user: User
  }
  const [data, setData] = useState<TData>(info);
  //
  // useEffect(() => {
  //   // setData(data);
  //   // console.log(data);
  //   console.log(typeof data);
  // }, [])
  return (
    <div className="App">
      <ContentBody teams={data.teams}/>
    </div>
  );
}

export default App;
