import React from 'react'
import Post from './Post'

export default function Posts({posts}) {

    if(!posts.length) {
        return (
        <>
            <h1>No any posts yet</h1>
            <button className='btn btn-primary'>Check posts</button>
        </>
        )
    }
    return (
        <>
            <h1>Local Posts</h1>
            {posts.map(post => <Post post={post} key={post} />)}
        </>
    )
}