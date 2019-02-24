import React, { Component } from 'react';
import '../../stylesheets/Home.css'

class BioParagraph extends Component {

    static dateChecker() {
        let yearDiff = (Date.now() - Date.parse('1/17/2017')) /1000 /60 /60 /24 /365;
        let dec = yearDiff.toString().split('.')[1].substr(0,2);

        if(dec > 75)
            return 'about ' + Math.ceil(yearDiff);

        return 'over ' + Math.floor(yearDiff);
    };

    render() {
        return (
            <div className="bioParagraph">
                <p className="bioFormat">
                    Hello! My name is Alex and I'm a full stack developer with { BioParagraph.dateChecker() } years
                    experience. I currently live in northern New Jersey. Lets see what we can do together.
                </p>
            </div>
        );
    }
}

export default BioParagraph;