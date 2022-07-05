import { useEffect, useState } from "react";
import Post from './Post'
import socketIo from 'socket.io-client'///download it from npm
export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/posts");//connect here!
            const posts = await response.json();
            setPosts(posts)
        })();
    }, []);
    useEffect(() => {
        const socket = socketIo("http://localhost:8080");
        socket.on('comment', commentData => {
            const newPost = [...posts];
            const postIndex = newPost.findIndex(p => p._id === commentData.postId);
            const postCopy = { ...newPost[postIndex] }
            postCopy.comments = postCopy.comments || []; //(pure component)add 3 extra lines, becausenot so safe or iffecent in spirit of react, so we'll redo it as copies explanined 8:22 in class 112
            postCopy.comments.push(commentData.comment);
            newPost[postIndex] = postCopy;
            setPosts(newPost);
        });
    }, [posts]);//with empty array, oops it was a closure
    return (
        <div>
            {posts.map(p => (<Post key={p._id} post={p} />))}
        </div>
    )
}