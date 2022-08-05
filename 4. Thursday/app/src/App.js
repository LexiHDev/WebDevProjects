import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import CustomRegistration from './components/CustomerRegister';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Page-content">
        <Sidebar/>
        <Page title="Registration" component={<CustomRegistration/>}></Page>
      </div>
    </div>
  );
}

export default App;
