import React, {useState} from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage.js';
import About from './Pages/About.js';
import Projects from './Pages/Projects.js';
import Contact from './Pages/Contact.js';
import {Switch, Route} from 'react-router-dom';

function App() {
    const [navToggle, SetNavToggle] = useState(false);

    const navClick = () =>{
        SetNavToggle(!navToggle);
    }
    return (
        <div className="App">
            <div className={`sidebar ${navToggle ? 'nav-toggler': ''}`}>
                <Navbar />
            </div>
            <div className="toggler" onClick={navClick}>
                <div></div>
            </div>
                <div className="main-content">
                    <div className="content">
                        <Switch>
                            <Route path="/" exact>
                                <HomePage />
                            </Route>
                            <Route path="/aboutme" exact>
                                <About />
                            </Route>
                            <Route path="/projects" exact>
                                <Projects />
                            </Route>
                            <Route path="/contactme" exact>
                                <Contact />
                            </Route>
                        </Switch>
                    </div>
                </div>
                    
        </div>
    )
}

export default App
