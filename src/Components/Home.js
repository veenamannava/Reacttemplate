
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from './Carousel1';
import About from './About';
import UseCases from './UseCases';
import Solutions from './Solutions';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (
    <div className="App">
      
     <Carousel1/> 
      <Solutions/>
      <UseCases/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default Home;
  
           
         
        
        
