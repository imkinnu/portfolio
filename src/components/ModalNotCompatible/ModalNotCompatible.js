import React from 'react'

const ModalNotCompatible = ({ display }) => {
    return (
        <div class="modal" tabindex="-1" role="dialog" style={{ display: `${display}` }}>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-white">
                        <h5 class="modal-title" id="exampleModalCenteredLabel">Information</h5>
                    </div>
                    <div class="modal-body">
                        Sorry ! Not Optimized for Mobile Yet.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalNotCompatible
