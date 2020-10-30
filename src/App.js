import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Album from './Components/Album'
import Heading from './Components/Heading'
import Drawer from './Components/Drawer'
import Footer from './Components/Footer'




function App() {
  return (
    <div className="App">
      <header >
        <Heading />
      </header>

      <body>
        <div>
          <Drawer />
        </div>
      </body>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
