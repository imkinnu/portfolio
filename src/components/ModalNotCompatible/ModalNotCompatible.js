import React, { useState } from 'react'

const ModalNotCompatible = ({ display }) => {


    const [modalVisible, setModalVisible] = useState(true)

    let openModal = () => {
        const visible = !modalVisible;
        setModalVisible(visible);
    }

    let styles = modalVisible ? 'block' : 'none';
    return (
        <div class="modal" id="exampleModalCentered" tabindex="-1" style={{ display: `${styles}` }} role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title" id="exampleModalCenteredLabel">Information</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Sorry ! Not Optimized for Mobile Yet.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => openModal()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNotCompatible
