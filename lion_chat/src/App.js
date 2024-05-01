
import logo from './RRR.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="photo" src={logo} alt="Logo" />
        <h1 >Welcome to My React App lion's chat!</h1>
      
        <p>
          This is a sample React application showcasing basic features.
        </p>
        <div className="App-buttons">
          <button className="App-button" href="#about-us">
            About Us
          </button>
          <button className="App-button" href="#services">
            Services
          </button>
          <button className="App-button"  href="#contact">
            Contact
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;