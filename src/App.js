import './style.css'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchPosts from './components/FetchPosts'

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
          <Posts posts={[1,2,3]}/>
        </div>
        <div className='column'>
          <FetchPosts posts={[]} />  
        </div>
      </div>
    </div>
  );
}

export default App;
