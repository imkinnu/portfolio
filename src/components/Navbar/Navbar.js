import React, { useState, useEffect } from 'react';
import Navlink from './Navlink/Navlink';

import { useLocation } from 'react-router-dom';

const Navbar = ({ bgcolor }) => {
    let [state, setState] = useState([]);
    let [active, setActive] = useState('');
    useEffect(() => {
        setState([
            {
                "name": "ABOUT",
                "content": "About"
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
        ])
    }, [])
    return (
        <div>
            <LocationTrack setActive={setActive} />
            <div className="nav flex-column nav-pills mt-5">
                {state.map(item => {
                    let className = "nav-link";
                    if ("/" + item.content.toLowerCase() === active) {
                        className += ' active';
                    }
                    return (<Navlink key={item.name} name={item.name} bgcolor={bgcolor} className={className} id="" to={item.name.toLowerCase()} />);
                })}
            </div>
        </div>
    );
}

let LocationTrack = ({ setActive }) => {
    let location = useLocation();
    if (location.pathname !== '') {
        setActive(location.pathname)
    }
    return null;
}

export default Navbar;