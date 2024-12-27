// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const ButtonSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      username,
      password
    };

    try {
      const response = await axios.post("http://127.0.0.1:8081/api/users/", userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage('Пользователь успешно создан!');
      console.log(response.data);
    } catch (error) {
      setMessage('Ошибка при создании пользователя');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Создать пользователя</h2>
      <form onSubmit={ButtonSubmit}>
        <div>
          <label>Имя пользователя:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Электронная почта:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserForm;
