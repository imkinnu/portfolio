import React from 'react';

const Image = (props) => {
    const { name, source, height, width } = props;
    return (
        <img src={source} alt={name} height={height} width={width} />
    )
}

export default Image;