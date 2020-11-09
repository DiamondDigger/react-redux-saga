import './style.css'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'

function App() {
  return (
    <div className="container-fluid ">
      <h1>Hello, buddy!</h1>
      <div className='row'>
        <div className='column'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <Posts />
        </div>
        <div className='column'>
          <FetchedPosts />  
        </div>
      </div>
    </div>
  );
}

export default App;
