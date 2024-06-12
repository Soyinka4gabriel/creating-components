import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Header name="Anna" color="Purple"/>
      <Main greet="Howdy"/>
      <Sidebar greet="Hi"/>
    </div>
  );
}

export default App;
