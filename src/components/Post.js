import React from 'react'

export default function Post({post}) {
    console.log('post - one more !')
    return (
        <div className='card text-white bg-secondary' style={{maxWidth: '25rem', marginBottom:'2%'}} >
             <div className='card-header'>{post.title}</div>
            <div className='card-body'>
             <div className='card-text'>{post.body}</div>
            </div>
        </div>
    )
}