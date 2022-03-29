import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Modal from 'react-modal';
import { handleModalProfileAssociate } from '../../../actions/ui';

import { ProfileForm } from '../../Vendor/ProfileForm/ProfileForm'

import './ProfileAssociated.css'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')


export const ProfileAssociated = ({setShowModalMap}) => {

    const dispatch = useDispatch()

    const { showModalProfileAssociate } = useSelector(state => state.ui)



    const [dateEnd, setDateEnd] = useState(null)

    const handleCloseModal = () => {
        dispatch( handleModalProfileAssociate(false) )
    }
    

    

    useEffect(() => {
        
    }, [])



    return (
      <Modal
        isOpen={showModalProfileAssociate}
        style={customStyles}
        className="modal2"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <div className="container">
          <div className="modalProductDetails__header mb-3">
            <div className="modalProductDetails__title">
              <h4 className="modalProfile__title">Perfil</h4>
            </div>
            <button
              type="button"
              className="modalProductDetails__btnClose"
              onClick={handleCloseModal}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ProfileForm/>
        </div>
      </Modal>
    );
}
