import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Post from './Post'
import { fetchPost } from '../redux/actions'

export default function FetchedPosts() {
const dispatch = useDispatch()
const posts = useSelector(state => state.posts.fetchedPosts)
console.log('fetchPosts', posts)

    if(!posts.length) {
        return (
        <>
            <h1>Remote Posts</h1>
            <h1>No any posts yet.</h1>
            <button 
            className='btn btn-primary'
            onClick={() => dispatch(fetchPost())}
            >Check posts</button>
        </>
        )
    }

    return (
        <>
            <h2>Remote Posts</h2>
            {posts.map(post => <Post post={post} key={post.id} />)}
        </>
    )
}