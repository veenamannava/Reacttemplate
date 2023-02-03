import React, { Component } from 'react'
// import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { Navbar,Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Solutions from './Solutions';
import UseCases from './UseCases';
import Skills from './Skills';
import Blog from './Blog';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import { Redirect } from 'react-router';
import PageNotFound from './page'


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div className="navbar1">

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0" 
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/solutions">Solutions</Nav.Link>
                                <Nav.Link as={Link} to="/usecases">UseCases</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                    
                       
                    
                    <Route  exact path="/home">
                            <Home/>
                            
                        </Route>
                        
                        <Route  exact path="/about">
                             <About /> 
                        </Route>
                        <Route  exact path="/solutions">
                             <Solutions />
                        </Route>
                        <Route  exact path="/usecases">
                             <UseCases /> 
                        </Route>
                       
                        <Route exact path="/skills">
                             <Skills /> 
                        </Route>
                        
                        <Route  exact path="/blog">
                             <Blog /> 
                             {/* <Redirect from="/" component={Blog1} to="/Blog" /> */}
                            </Route>
                            
                            
                             
                        <Route  exact path="/contact">
                             <Contact /> 
                        </Route>
                        <Route   path="/blogdetail/:Blog1" component={Blog1}>
                        
                        
                        </Route>
                        <Route   path="/blogdetails/:Blog2" component={Blog2}>
                        
                        
                        </Route>
                        {/* <Redirect from="/blog" to="/home" /> */}
                        
                        <Route  exact path="/">
                            <Home/>
                            
                        </Route>
                        <Route component={PageNotFound} />
                         
                        
                        
                    </Switch>
                </div>
            </Router>
        )
    }
}
