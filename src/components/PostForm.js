import React from 'react'
import {connect} from 'react-redux'
import {createPost} from '../redux/actions'
 
class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault()

        const {title, content} = this.state

        const newPost = {
            title, content, id: Date.now().toString()
        }

        this.props.createPost(newPost)

        this.setState({title: '', content: ''})
        console.log('state', this.state)
        console.log('newPost', newPost)
    }

    changeInputHandler = (event) => {
        event.persist()
        this.setState(prev => ({...prev, ...{[event.target.name]: event.target.value}}))
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <h1>Post Form Component</h1>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="title" 
                        name='title'
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        rows='3' 
                        type="text" 
                        className="form-control" 
                        id="content"
                        placeholder="content" 
                        name='content'
                        value={this.state.content}
                        onChange={this.changeInputHandler}
                     />
                </div>
                <button className='btn btn-success' type='submit'>Load</button>
            </ form>
        )
    }
}

const mapDispatchToProps = {
    createPost 
}

export default connect(null, mapDispatchToProps)(PostForm)