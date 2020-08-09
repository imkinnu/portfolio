import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = (props) => {
    let { name, className, id, to, bgcolor } = props;

    let styles = {};
    if (className === 'nav-link active') {
        styles = {
            menuStyle: {
                color: "#fff",
                backgroundColor: `${bgcolor}`,
                boxShadow: "0 1rem 3rem rgba(0, 0, 0, .175)!important",
            }
        }
    }
    else {
        styles = {
            menuStyle: {
                color: '#024dbc',
                boxShadow: "0 1rem 3rem rgba(0, 0, 0, .175)!important"
            }
        }
    }

    return (
        <Link style={styles.menuStyle} className={className} id={id} to={to} >{name}</Link>
    )
}

export default Navlink;