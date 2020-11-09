import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = ''
    }

    submitHandler = (event) => {
        event.preventDefault()

        const {title, content} = this.state

        const newPost = {
            title, content, id: Date.now().toString()
        }

        this.setState({title: '', content: ''})
        console.log(this.state)
        console.log(newPost)
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
                    <input 
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