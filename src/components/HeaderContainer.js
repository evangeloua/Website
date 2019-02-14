import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import BioParagraph from './Home/BioParagraph'
import './HeaderContainer.css';

class HeaderContainer extends Component {
    render() {
        return (
            <HashRouter>
                <div className="headerContainer">
                    <nav>
                        <NavLink>Icon goes here</NavLink>
                        <NavLink className="navLinkRight" to="#">Social</NavLink>
                        <NavLink className="navLinkRight" to="#connect">Connect</NavLink>
                        <NavLink className="navLinkRight" to="#github">GitHub</NavLink>
                        <NavLink className="navLinkRight" to="#home">Home</NavLink>
                    </nav>
                </div>
            </HashRouter>
        )
    }
}

export default HeaderContainer;