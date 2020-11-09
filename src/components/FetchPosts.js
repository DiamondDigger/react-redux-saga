import React from 'react'
import Post from './Post'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPost } from '../redux/actions'

export default function FetchPosts() {
const dispatch = useDispatch()
const posts = useSelector(state => state.posts.fetchPosts)

    if(!posts.length) {
        return (
        <>
            <h1>Remote Posts</h1>
            <h1>No any posts yet.</h1>
            <button 
            className='btn btn-primary'
            onClick={() => dispatch(fetchPost)}
            >Check posts</button>
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