import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { handleModalVideoCall } from "../../actions/chat";

export const ModalVideoCall = () => {
  const dispatch = useDispatch();

  const { modalVideoCall, dataVideoCall } = useSelector((state) => state.chat);

  const [avatar, setAvatar] = useState(null);

  const handleViewAvatar = () => {
    if (dataVideoCall?.sender_data.avatar === "") {
      setAvatar("../../../assets/images/avatar_edit.png");
    } else {
      setAvatar(
        `${process.env.REACT_APP_BASE}/uploads/customers/${dataVideoCall.sender_data.id}/${dataVideoCall.sender_data.avatar}`
      );
    }
  };

  useEffect(() => {
    if (dataVideoCall) {
      handleViewAvatar();
    }
    handleViewAvatar();
  }, [dataVideoCall]);

  useEffect(() => {
    if (modalVideoCall) {
      let myAudio = new Audio("../../assets/sounds/sound_videocall.wav");
      if (typeof myAudio.loop == "boolean") {
        myAudio.loop = true;
      }

      myAudio.play();

      return () => {
        myAudio.pause();
      };
    }
  }, [modalVideoCall]);

  const handleAccept = () => {
    dispatch(handleModalVideoCall(false));
    window.open(dataVideoCall.link, "_blank");
  };

  return (
    <Modal
      show={modalVideoCall}
      // show={true}
      onHide={() => dispatch(handleModalVideoCall(false))}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="modal__btnClose d-flex justify-content-end">
          <i
            className="fas fa-times"
            onClick={() => dispatch(handleModalVideoCall(false))}
          ></i>
        </div>
        <div className="contact__form">
          <h3 className="text-center">Videollamada iniciada</h3>
          <div className="videoCallModal__info text-center">
            <div className="videoCallModal__img">
              <img src={avatar}></img>
            </div>
            <h4>
              {dataVideoCall.sender_data.name}{" "}
              {dataVideoCall.sender_data.apellido}
            </h4>
          </div>

          <div className="videoCallModal__btns d-flex justify-content-center">
            <button
              className="cartPage__deleteItems mr-5"
              onClick={() => dispatch(handleModalVideoCall(false))}
            >
              Rechazar
            </button>
            <button className="btn__gold" onClick={handleAccept}>
              Aceptar
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
