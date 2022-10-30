import './App.css';
import ButtonComponent from './components/Button';
import CardComponent from './components/Card';
import tropical from './images/tropical.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <ButtonComponent />
        </p>
        <div className="card">
        <CardComponent 
        message="Hello, it is cold here"

          image= 'https://images.unsplash.com/photo-1514970746-d4a465d514d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'/>
        </div>
        <div className="card">
        <CardComponent message='Hello, it is warm here'
          image= 'https://images.unsplash.com/photo-1639558883191-7e8133c4497c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'/>
        </div>
      </header>
    </div>
  );
}

export default App;
