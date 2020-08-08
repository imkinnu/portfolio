import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = (props) => {
    const { name, className, id, to } = props;
    return (
        <Link class={className} id={id} to={to} >{name}</Link>
    )
}

export default Navlink;