import React, { useContext, useEffect, useState } from 'react';
import { PersonContext } from './PersonContext';
import axios from 'axios';

import { CloseSquareFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Slider, Space } from 'antd';
import { GetUsers } from './Api';


export function Settings() {
    const { person, setPerson } = useContext(PersonContext);
    return (
        <>
            <div>
                <h1>User Profile</h1>
                <p><img className='ava' src={person.avatar} alt="ava" /></p>
                <p><strong>Name:</strong> {person.username}</p>
                <p><strong>Age:</strong> {person.age}</p>
                <p><strong>Address:</strong> {person.address}</p>
                <p><strong>Status:</strong> <span>{person.status}</span></p>
                <p><strong>Email:</strong> {person.email}</p>
            </div>
            <div style={{marginBottom:'1em'}}>
                <Space.Compact style={{ width: '100%' }}>
                    <Input placeholder="some text" />
                    <Button type="primary">Submit</Button>
                </Space.Compact>
            </div>
            <div>
                <GetUsers/>
            </div>
        </>
    )

}



