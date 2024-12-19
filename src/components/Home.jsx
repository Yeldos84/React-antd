import React, {useContext} from 'react';
import car from "../assets/car.jpg"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Space, Input, Button  } from 'antd';
import { Link } from 'react-router-dom';
import { Settings } from './Settings';
import { ClickButton } from './Button';
import { AddPosts } from './AddPosts';

import { PersonContext } from './PersonContext';

const { Meta } = Card;

const Home = () => {
    const { person, setPerson } = useContext(PersonContext); 
    const editName = () => {
        console.log('Edit');
       
      };

    return(
        <>
        <div style={{display:"flex"}}>
        <div>
            <Card
            style={{
            width: 300,
            }}
            cover={
            <img
                alt="example"
                src={car}
            />
            }
            actions={[
            <Link to="/settings" key="setting">   
                <SettingOutlined />,
            </Link>,
            <EditOutlined key="edit" onClick={editName} />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
            >
            <Meta
            avatar={<Avatar src={person.avatar} />}
            title={person.username}
            description={
                <>
                    <p>address: {person.address}</p>
                    <p>email: {person.email}</p>
                </>
            }
            
            />
        </Card>
        </div>
        <div style={{width:"100%"}}>
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                <Card title="Vkontakte" size="large">
                <AddPosts/>
                </Card>
                
            </Space>
        </div>
        </div>
        </>
        
    )
  

};
export default Home;