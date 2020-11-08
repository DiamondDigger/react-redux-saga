import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = ''
    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <h1>Post Form Component</h1>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input type="text" className="form-control" id="content" placeholder="content" />
                </div>
                <button className='btn btn-success' type='submit'>Load</button>
            </ form>
        )
    }
}