import React from 'react'
import Modal from 'react-modal';

const ModalComponent = ({ modalData, setModalData, modalSubmit }) => {
  console.log(modalData);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleModalSubmit = (e) => {
    modalSubmit(e, modalData.text, modalData.id, modalData.idx)
    setModalData({ ...modalData, isOpen: false })
  }

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={modalData.isOpen}
      onRequestClose={() => { setModalData({ ...modalData, isOpen: false }) }}
      style={customStyles}
      contentLabel="Example Modal"
    >
      
      <React.Fragment>
      <h2 className='text-4xl mb-4' >{modalData.title}</h2>
      <form className="flex relative items-center border-b border-b-2 border-teal-500 py-2">
        <input className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none w-[350px]" type="text"  value={modalData.text} onChange={(e)=>{setModalData({...modalData,text:e.target.value}) }}  />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4" onClick={(e)=>handleModalSubmit(e)}>
          Update
        </button>
      </form>
      </React.Fragment>
    </Modal>
  )
}

export default ModalComponent