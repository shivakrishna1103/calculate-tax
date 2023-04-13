import logo from './logo.svg';
import './App.css';
import IncomeTaxForm from './components/IncomeTaxForm'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Calculate -tax</h1>
        <IncomeTaxForm />
      </div>
    </div>
  );
}

export default App;
