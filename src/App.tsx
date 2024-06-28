
import './App.css';
import Userservice from './API/Userservice';

function App() {
  return (
    <div className="App">
      <h2 style={{ fontFamily: "monospace" ,textAlign:'center' }}> Welcome to Move Hub</h2>
      <div>
        <Userservice />
      </div>
    </div>
  );
}

export default App;
