import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div className='App'>
      <Header name="Anna" color="Purple"/>
      <div>
        <Main greet="Howdy"/>
        <Sidebar greet="Hi"/>
      </div>
    </div>
  );
}

export default App;
