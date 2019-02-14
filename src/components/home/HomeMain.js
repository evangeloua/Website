import React, { Component } from 'react';
import '../../stylesheets/Home.css'
import BioParagraph from "./BioParagraph";

class HomeMain extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <BioParagraph/>
            </div>
        );
    }
}

export default HomeMain;