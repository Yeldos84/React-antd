import React from 'react';
import { Breadcrumb } from 'antd';

import "../css/style.css"

import { Typography } from 'antd';
const { Title } = Typography;

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Settings } from './Settings';
import  Home  from './Home';
import { GetUsers } from './Api';
import  ApiPage  from './ApiPage';



const HomePage = () => (
  <BrowserRouter>
   <nav>
        <Link to="/"> <Title level={3}>Home</Title></Link>
        <Link to="/settings"><Title level={3}>Settings</Title></Link>
        <Link to="/api"><Title level={3}>API</Title></Link>
  </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/api" element={< ApiPage />} />
    </Routes>
    {/* <Breadcrumb
      items={[
        {
          title: <a href="/">Home</a>,
        },
        {
          title: <a href="/settings">Settings</a>,
        },
        
      ]}
    /> */}
  </BrowserRouter>
);
export default HomePage;