import React from 'react';

const HyperLink = (props) => {
    const { href, className, children } = props;
    return (
        <a className={className} href={href} >
            {children}
        </a >
    )
}

export default HyperLink;