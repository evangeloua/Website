import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
// import HeaderContainer from './components/HeaderContainer'
import BioParagraph from './components/Home/BioParagraph';
import LinkList from './components/Social/LinkList';
import './App.css';
import './components/HeaderContainer.css';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="headerContainer">
                        <a className="navLinkRight" target="_blank" href="https://github.com/evangeloua">GitHub</a>
                        <NavLink className="navLinkRight" to="/social">Social</NavLink>
                        <NavLink className="navLinkRight" to="/connect">Connect</NavLink>
                        <NavLink className="navLinkRight" to="/home">Home</NavLink>
                        <NavLink className="navLinkLeft" exact to="/">Icon goes here</NavLink>
                    </div>
                    <div>
                        <Route exact path="/" component={BioParagraph}/>
                        <Route path="/home" component={BioParagraph}/>
                        <Route path="/github" component={LinkList}/>
                        <Route path="/connect" component={LinkList}/>
                        <Route path="/social" component={LinkList}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
