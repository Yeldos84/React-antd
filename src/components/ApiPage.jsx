import { useState } from 'react';

import { Breadcrumb } from 'antd';
// import './App.css'
import { GetUsers } from './Api';
import {GetDjangoUsers} from './GetDjangoUsers';
import UserForm from './UseForm';

function ApiPage() {
  return (
    <>
      <div>
        <p>
          <strong>Fetch form Jsonplaceholder</strong>
        </p>
        <GetUsers />
      </div>
      <div>
        <UserForm />
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>
          <strong>Fetch form Dkango - localhost</strong>
        </p>
        <GetDjangoUsers />
      </div>
    </>
  );
}

export default ApiPage;
