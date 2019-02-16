import React, {Component} from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../../stylesheets/Contact.css';
import '../../App.css';

class ContactMain extends Component {
    render() {
        return (
            <div className="AppBody">
                <SimpleBar>
                    <h1>Contact</h1>
                </SimpleBar>
            </div>
        );
    }
}

export default ContactMain;