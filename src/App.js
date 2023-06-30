import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Login/>
      <Registration/>
      <Footer/>
    </div>
  );
}

export default App;
