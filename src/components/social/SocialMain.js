import React, {Component} from 'react';
import Icon from 'react-simple-icons';
import '../../stylesheets/Social.css'
import '../../App.css';

class SocialMain extends Component {
    render() {
        return (
            <div className="bodForApp">
                <a href="https://twitter.com/AlexEvangelou4"><Icon name="twitter" size={64}/></a>
                <a href="https://www.facebook.com/alex.evangelou.3"><Icon name="facebook" size={64}/></a>
                <a href="https://twitter.com/AlexEvangelou4"><Icon name="github" size={64}/></a>
                <a href="https://twitter.com/AlexEvangelou4"><Icon name="linkedin" size={64}/></a>
            </div>
        );
    }
}

export default SocialMain;