import logo from './logo.svg';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  </>
    
  );
}

export default App;
