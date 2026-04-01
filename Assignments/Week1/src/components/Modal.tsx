function Modal({ onDismissModal }: { onDismissModal: () => void }) {

    return (
        <>
            <div className='modal'>
                <p>Did you complete this task?</p>
                <button className='btn btn-highlight' onClick={onDismissModal}>Cancel</button>
                <button className='btn btn-highlight' onClick={onDismissModal}>Confirm</button>
            </div>
            <div className='backdrop'></div>
        </>
    )

}

export default Modal;