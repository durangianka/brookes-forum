import React from 'react';
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import Post from './Post';
function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'posts'))
            .then((snapshot) => {
                let docs = []
                snapshot.docs.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setPosts(docs)
            })
            .catch(err => console.error(err.message));
    }, [])
    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.post.user.username}
                    content={post.post.content}
                    date={post.post.date}
                    forum={post.post.forum}
                    likes={post.post.likes}
                    comments={post.comments}
                    image={post.post.user.img}
                />
            ))}
        </div>
    );
}

export default Posts;
