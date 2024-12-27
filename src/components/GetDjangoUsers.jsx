import axios from 'axios';

import React, { useContext, useEffect, useState } from 'react';
import { data } from 'react-router-dom';


export function GetDjangoUsers() {
    const [usersDjango, setUsersDjango] = useState([])
    const [err, setErr] = useState([])

    const djangoUrlUsers = "http://127.0.0.1:8081/api/users/"

    useEffect(() => {
        axios.get(djangoUrlUsers)
            .then(response => {
                const fetchUsersDjango = response.data
                console.log(fetchUsersDjango);
                // console.log(data);
                setUsersDjango(fetchUsersDjango)

            })
            .catch(error => {
                setErr(error)
                
                


            }

            );

    }, [])

    return (
        <>
            <ul>
                {usersDjango.map((user) =>(
                    (user.username === "darkhan") && (
                    <li key={user.id}>

                        {user.username}, {user.password}
                    </li>)
                ))}
                
            </ul>
            <div style={{color: 'red'}}>
                {err.message}
            </div>
        </>
    )

}

