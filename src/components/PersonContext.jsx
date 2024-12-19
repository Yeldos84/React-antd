import React, { createContext, useState } from 'react';

const PersonContext = createContext();

const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState({
    username: "Jax", 
    age: 40,
    address: "NY",
    status: "online",
    email: "email@email.com",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
  });

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};

export { PersonContext, PersonProvider };
