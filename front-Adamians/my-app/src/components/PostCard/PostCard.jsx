import React from "react";
import s from './style.module.css';
import { useState } from 'react';
import Modal from "react-modal";

function PostCard({ postCards }) {
  // const Title=postData?.title
  // console.log(Title);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: 400,
    },
  };

  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div className={s.Card}>




      <div className={s['post-list']}>
        <div onClick={setModalOpen}>

          <img src={postCards.img} alt="Post Image" />
          <div className={s.container}>
            <h2>{postCards.title}</h2>
            <p style={{ fontWeight: 800 }}>{postCards.autor}</p>
            <div className={s['post-meta']}>{postCards.text}</div>

          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
  <div className={s['post-list']}>

          <img src={postCards.img} alt="Post Image" />
          <div className={s.container}>
            <h2>{postCards.title}</h2>
            <p style={{ fontWeight: 800 }}>{postCards.autor}</p>
            <div className={s['post-meta']}>{postCards.text}</div>

          </div>
       
      </div>
        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
  
    </div>

  );
}



export default PostCard;

