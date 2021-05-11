import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header>
          Hello React Storybook
        </Header>
        <Button>
          Test
        </Button>
      </header>
    </div>
  );
}

export default App;
