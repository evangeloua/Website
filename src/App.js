import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import HomeMain from './components/home/HomeMain';
import SocialMain from './components/social/SocialMain';
import ContactMain from "./components/contact/ContactMain";
import './App.css';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="header">
                        <div className="headerIcon">
                            <NavLink className="icon" exact to="/">Icon goes here</NavLink>
                        </div>
                        <div className="headerNav">
                            <NavLink className="navLink" to="/home">Home</NavLink>
                            <NavLink className="navLink" to="/contact">Contact</NavLink>
                            <NavLink className="navLink" to="/social">Social</NavLink>
                            <a className="github" target="_blank" href="https://github.com/evangeloua">GitHub</a>
                        </div>
                    </div>
                    <div>
                        <Route exact path="/" component={HomeMain}/>
                        <Route path="/home" component={HomeMain}/>
                        <Route path="/contact" component={ContactMain}/>
                        <Route path="/social" component={SocialMain}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
