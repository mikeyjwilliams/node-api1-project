import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid/v1';
import User from './components/User';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);
  console.log();
  useEffect(() => {
    axios
      .get('https://node-api1-project-mw.herokuapp.com/api/users')
      .then(user => {
        setUsers(user.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      {users.map(info => {
        return <User key={uuid()} info={info} />;
      })}
    </div>
  );
}

export default App;
