import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import BlogPost from './components/BlogPost';
import {str} from "./articleString"

function App() {
  return (
    <div className="App">
      <Header/>
      <div class="Page-content">
        <Sidebar/>
        <BlogPost title='"My First Blog Post"' date="08/03/2022" article={str}/>
      </div>
    </div>
  );
}

export default App;
