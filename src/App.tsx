import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Annotations from './components/Annotations';
import ToDo from './components/ToDo';

function App() {
  return (
    <>
      <Header />
      <Calendar />
      <Annotations />
      <ToDo />
    </>
  );
}

export default App;
