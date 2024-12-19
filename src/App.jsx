import { useState } from 'react'

import { Breadcrumb } from 'antd';
// import './App.css'
import  HomePage  from './components/HomePage'
import { PersonProvider } from './components/PersonContext';


function App() {
  
  return (
    <>
      <PersonProvider>
        <HomePage/>
      </PersonProvider>
      
    </>
  )
}

export default App
