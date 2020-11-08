import React from 'react'
import Post from './Post'

export default function FetchPosts({posts}) {

    if(!posts.length) {
        return (
        <>
            <h1>Remote Posts</h1>
            <h1>No any posts yet.</h1>
            <button className='btn btn-primary'>Check posts</button>
        </>
        )
    }

    return (
        <>
            <h2>Remote Posts</h2>
            {posts.map(post => <Post post={post} key={post} />)}
        </>
    )
}