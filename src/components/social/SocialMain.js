import React, {Component} from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../../stylesheets/Social.css'
import '../../App.css';

class SocialMain extends Component {
    render() {
        return (
            <div className="AppBody">
                <SimpleBar>
                    <h1>Social</h1>
                </SimpleBar>
            </div>
        );
    }
}

export default SocialMain;