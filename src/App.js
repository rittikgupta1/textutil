import Navbar from './components/Navbar';
import './App.css';
import Forms from './components/Forms';

function App() {
  return (
    <>
    <Navbar title="Textutils" aboutname="About"/>
    <div className="container my-3">
    <Forms heading="Enter the text here"/>
    </div>
    </>
  );
}

export default App;
