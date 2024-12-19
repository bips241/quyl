import logo from './logo.svg';
import './App.css';
import { Button } from "./components/ui/button"
import { Card } from './components/ui/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Click me</Button>
        <Card>
          <h1>Card title</h1>
          <p>Card content</p>
        </Card>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
