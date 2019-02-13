import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/HeaderContainer'
import BioParagraph from './components/Home/BioParagraph';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <BioParagraph/>
            </div>
        );
    }
}

export default App;
