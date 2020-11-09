import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const Posts = ({localPosts}) => {
    console.log('localPosts: ', localPosts)

    if(!localPosts.length) {
        return (
        <>
            <h1>Local Posts</h1>
                <h1>No any posts yet</h1>
            <button className='btn btn-primary'>Check posts</button>
        </>
        )
    }
    return (
        <>
            <h1>Local Posts</h1>
            {localPosts.map(post => <Post post={post} key={post.id} />)}
        </>
    )
}

const mapStateToProps = (state) => ({
    localPosts: state.posts.posts
})
export default connect(mapStateToProps, null)(Posts)