import './App.css';
import ButtonComponent from './components/Button';
import CardComponent from './components/Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <ButtonComponent />
        </p>
        <div className="card">
        <CardComponent />
        </div>
        <div className="card">
        <CardComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
