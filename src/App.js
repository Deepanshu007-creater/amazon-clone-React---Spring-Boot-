import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import HomePage from './Component/HomePage/HomePage';
import DisplayContent from './Component/DisplayContent/DisplayContent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <HomePage/> */}
      <DisplayContent/>
    </div>
  );
}

export default App;
