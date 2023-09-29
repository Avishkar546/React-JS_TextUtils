//  import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';

function App() {
  return (
    <>
      <Navbar title="Google" about="Hello" />
      <div className="container">
        <Text heading="Enter Text To Analyze" />
      </div>

    </>
  );
}

export default App;