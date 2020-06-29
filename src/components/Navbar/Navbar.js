import React, { Component } from 'react';
import Navlink from './Navlink/Navlink';
import Col from './../UI/Col/Col';

class Navbar extends Component {

    state = {
        "menuoptions": [
            {
                "name": "ABOUT",
                "content": "Content"
            },
            {
                "name": "PROJECTS",
                "content": "Projects"
            },
            {
                "name": "SKILLS",
                "content": "Skills"
            },
            {
                "name": "CONTACT",
                "content": "Contact"
            }
        ]
    }
    render() {
        return (
            <div>
                <div class="nav flex-column nav-pills mt-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {this.state.menuoptions.map(item => {
                        let className = "nav-link";
                        let aria_selected = false;
                        if (item.name === 'ABOUT') {
                            className += ' active';
                            aria_selected = true;
                        }
                        return (<Navlink name={item.name} className={className} id="" href={"#v-pills-" + item.name.toLowerCase()} aria_selected={aria_selected} />);
                    })}
                </div>
            </div>
        )
    }
}

export default Navbar;