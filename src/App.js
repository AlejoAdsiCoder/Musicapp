import logo from './logo.svg';
import { Sidebar } from './components/sidebar/Sidebar';
import { Main } from './components/main/Main';
import './App.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
