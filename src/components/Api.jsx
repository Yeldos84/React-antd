import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';


export function GetUsers() {
    const [users, setUsers] = useState([])
 

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(data => {
                const fetchUsers = data.data
                console.log(fetchUsers);
                setUsers(fetchUsers)

            })
            .catch(error => {
                alert(error)
                
                
            }
                
            );
            
    }, [])

    return (
        <>
            {users.map(user => {
                return (
                    <>
                        <ul key={user.id}>
                            <li>{user.name}, {user.email}</li>
                        </ul>

                    </>
                )
            })}

            
        </>
    )

}

