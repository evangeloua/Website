import React, {Component} from 'react';
import '../../stylesheets/Contact.css';

class BusinessCard extends Component {
    render() {
        return (
            <div className="businessCard">
                <div className="spacing">
                    <p className="cardName">Alexander Evangelou</p>
                    <p>Software Engineer</p>
                </div>
                <div className="spacing">
                    <p>aevangelou10@gmail.com</p>
                    <p>(201)-401-8914</p>
                </div>
            </div>
        );
    }
}

export default BusinessCard;