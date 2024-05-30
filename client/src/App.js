import Navbar from "./pages/components/Navbar4";
import Footer from './pages/Footer';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
export default App;

// after commit
// git checkout main
// git merge feature/sudipta
// git push origin main
// #449BA2 - Green shade
// #49BB8E -
// #FEE098
// #637179 - Grey Colour
