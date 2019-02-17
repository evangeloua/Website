import React, {Component} from 'react';
import '../../stylesheets/Home.css'
import '../../App.css'
import BioParagraph from "./BioParagraph";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class HomeMain extends Component {
    render() {
        return (
            <div className="AppBodyWithScroll">
                <SimpleBar>
                    <h1>Home</h1>
                    <BioParagraph/>
                </SimpleBar>
            </div>
        );
    }
}

export default HomeMain;