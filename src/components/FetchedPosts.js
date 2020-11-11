import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Post from './Post'
import Loader from './Loader'
import { fetchPost, showLoader, hideLoader } from '../redux/actions'

export default function FetchedPosts() {
const dispatch = useDispatch()
const posts = useSelector(state => state.posts.fetchedPosts)
const loading = useSelector(state => state.app.loading)

console.log('fetchPosts', posts)

if (loading) {
    return <Loader />
}

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
            <h1>Remote Posts</h1>
            {posts.map(post => <Post post={post} key={post.id} />)}
            <button 
            className='btn btn-primary'
            onClick={() => dispatch(fetchPost())}
            >Reload posts</button>
        </>
    )
}