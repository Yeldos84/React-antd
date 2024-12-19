import { PersonContext } from './PersonContext';
import React, {useContext} from 'react';
import { useState } from 'react';
import { AddPosts } from './AddPosts'

export function ClickButton() {
    // let postCount = 1;
    const [count, setCount] = useState(1);
    const [posts, setPosts] = useState([]);
    const { person, setPerson } = useContext(PersonContext); 
    
    function counter() {
        return setCount(count + 1)
    };     
    function press(e){
        const input = document.getElementById('post-input');
        console.log(input.value);

        if (input.value === '') {
            alert('Add text for post');
            input.style.backgroundColor = 'red';
        }
        else{
            counter()
            alert("Add new post?")
            input.style.backgroundColor = 'white';
            
            const newPost = {
                id: count,
                text: input.value,
                date: new Date().toLocaleDateString('ru-RU') + ' ' + new Date().toLocaleTimeString('ru-RU'),
                author: person.username,
                liked: false
            };

            setPosts(prev => [...prev, newPost]);
            input.value = '';
        }
        
        
        
        
        

    }

    function Liked(postId) {
        setPosts(prev =>
            prev.map(post =>
                post.id === postId ? { ...post, liked: !post.liked } : post
            )
        );
    }
    
    return (
        <>
            <button className="btn btn-outline-secondary" type="button" onClick={press}>
                Add post
            </button>
            <hr />
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <h5>Post #{post.id}: {post.text}</h5>
                        <p>Date: {post.date}  Author: {post.author}</p>
                        <button
                            style={{ borderRadius: '50%' }}
                            onClick={() => Liked(post.id)}
                        >
                            {post.liked ? '❤' : '🤍'}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}