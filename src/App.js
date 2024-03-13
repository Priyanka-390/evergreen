import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header';
import Section2 from './components/Section2';
import Customers from './components/Customers';
import Chicago from './components/Chicago';
import Ourservices from './components/Ourservices';
import Gallery from './components/Gallery';
import Happy from './components/Happy';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Section2/>
      <Customers/>
      <Chicago/>
      <Ourservices/>
      <Gallery/>
      <Happy/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
