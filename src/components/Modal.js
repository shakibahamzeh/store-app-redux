import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../assets/modal.css'

const Modal = ({closeModal}) => {
  return (
    <div className='modal-container'>
        <button onClick={() => closeModal(false)}>X</button>
        <form className='form-modal'>
            <input type="text" placeholder="Search..." />
            <SearchIcon className='search-icon'/>
        </form>
    </div>
  )
}

export default Modal