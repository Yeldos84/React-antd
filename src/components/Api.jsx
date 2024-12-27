import axios from 'axios';

import React, { useContext, useEffect, useState } from 'react';
import { data } from 'react-router-dom';

export function GetUsers() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState([]);
  const dataUrl = 'https://jsonplaceholder.typicode.com/users';
  const djangoUrl = 'http://127.0.0.1:8081/api/questions/';
  const djangoUrlUsers = 'http://127.0.0.1:8081/api/users/';

  useEffect(() => {
    axios
      .get(dataUrl)
      .then((resp) => {
        const fetchUsers = resp.data;
        console.log(fetchUsers);
        // console.log(data);
        setUsers(fetchUsers);
      })
      .catch((error) => {
        alert(error);
        setErr(error);
      });
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div>{err.code}</div>
    </>
  );
}
