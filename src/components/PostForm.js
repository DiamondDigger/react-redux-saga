import React from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import {Alert} from './Alert'
 
class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault()

        const {title, body} = this.state
        console.log('submit title:', title)
        console.log('submit body:', body)

        if (!title || !body) {
            return this.props.showAlert('Fill in all the fields')
        }

        const newPost = {
            title, body, id: Date.now().toString()
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
                {this.props.alert && <Alert text={this.props.alert} />}
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
                    <label htmlFor="body">Content</label>
                    <textarea
                        rows='3' 
                        type="text" 
                        className="form-control" 
                        id="body"
                        placeholder="content" 
                        name='body'
                        value={this.state.body}
                        onChange={this.changeInputHandler}
                     />
                </div>
                <button className='btn btn-success' type='submit'>Load</button>
            </ form>
        )
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert 
}

const mapStateToProps = (state) => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)