//import logo from './logo.svg';
import './App.css';
import Operation from './components/Operation';
import Cosmetics from './components/Cosmetics/Cosmetics';



function App() {

  return (
    <div className="App">
      <h1 className="bg-info">i am a bootstrap style//react side info</h1>
      <p>npm = node package manager</p>
      <p>create-react-app = CLI(command line interface)</p>

      <Operation></Operation>

      <Cosmetics></Cosmetics>
      
      
    </div>
  );
}

export default App;
