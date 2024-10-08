import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Logo from './components/Logo';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import Promo from './components/Promo';

function App() {
  return (
    <div className='App'>
      <ModeToggler/>
      <Header name="Anna" color="Purple"/>
      <Btn/>
      <Promo/>
      <div>
        <Main greet="Howdy"/>
        <Sidebar greet="Hi"/>
        <Logo/>
      </div>
    </div>
  );
}

export default App;
