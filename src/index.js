import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

// import Solutions from './Components/Solutions';
// import UseCases from './Components/UseCases';
// import About from './Components/About';
// import Skills from './Components/Skills';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
import Carousel1 from './Components/Carousel1';


ReactDOM.render(
  <React.StrictMode>
  
    <App />
    
    
    
    {/* <Solutions/>
      <UseCases/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>  */}
      

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
