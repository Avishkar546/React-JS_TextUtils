//  import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';

function App() {
  return (
    <>
      <Navbar title="Google" about="About" />
      <div className="container">
        <Text heading="Enter Text To Analyze" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;