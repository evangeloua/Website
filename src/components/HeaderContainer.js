import React, {Component} from 'react';
import './HeaderContainer.css';

class HeaderContainer extends Component {
    render() {
        return (
            <div className="headerContainer">
                <header>
                    <nav>
                        <a>Icon goes here</a>
                        <a className="navLinkRight" href="#">Social</a>
                        <a className="navLinkRight" href="#connect">Connect</a>
                        <a className="navLinkRight" href="#github">GitHub</a>
                        <a className="navLinkRight" href="#home">Home</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderContainer;