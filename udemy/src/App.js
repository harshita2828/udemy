// import logo from './logo.svg';
import './App.css';
import "./css/Apps.css";
import "./css/props.css"
import Header from "./screen/header";
import Sidebar  from './screen/sidebar';
function App() {
  return (
    <div className="App flex">
      <Sidebar/>
      <Header/>
    </div>
  );
}

export default App;
