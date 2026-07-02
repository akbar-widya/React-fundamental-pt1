import { useState } from "react";

export default function Topic1Lesson1() {
    const [likedPosts, setLikedPosts] = useState([])

    function handleLike(postId) {
        setLikedPosts((prev) => [...prev, postId])
    }

    return (
        <>
            <p>
                Liked Posts: {likedPosts.length > 0 ? likedPosts.join(', ') : 'None yet'}
            </p>
            <PostCard title="Learning React" postId="post-1" onLike={handleLike} />
            <PostCard title="Learning Prop" postId="post-2" onLike={handleLike} />
        </>
    )
}

function PostCard({ title, postId, onLike }) {
    return (
        <article>
            <h2>{title}</h2>
            <button onClick={() => onLike(postId)}>Like</button>
        </article>
    )
}