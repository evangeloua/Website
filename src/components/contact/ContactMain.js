import React, {Component} from 'react';
import BusinessCard from './BusinessCard';
import '../../App.css';

class ContactMain extends Component {
    render() {
        return (
            <div className="AppBody">
                <BusinessCard/>
            </div>
        );
    }
}

export default ContactMain;