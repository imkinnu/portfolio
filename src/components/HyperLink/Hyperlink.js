import React from 'react';

const HyperLink = (props) => {
    const { href, className, children, target } = props;
    return (
        <a className={className} href={href} target={target}>
            {children}
        </a >
    )
}

export default HyperLink;