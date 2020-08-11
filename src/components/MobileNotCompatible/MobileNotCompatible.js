import React from 'react';
import ModalNotCompatible from './../ModalNotCompatible/ModalNotCompatible'

const MobileNotCompatible = ({ checkMobile }) => {
    return (
        <div className="">
            {
                checkMobile === true ? <ModalNotCompatible display="block" /> : null
            }
        </div>
    )
}

export default MobileNotCompatible;
