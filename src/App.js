import './App.css';
import Header from './components/Header';
import AppToDo from './components/AppToDo';
import ModeButton from './components/ModeButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppToDo />
      </main>
      <ModeButton />
    </>
  );
}

export default App;
