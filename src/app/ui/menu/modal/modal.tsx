import React from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid' 
import './style.css'
import Link from 'next/link';

interface ModalProps {
  onClose: () => void; // Aqui você está indicando que onClose deve ser uma função sem parâmetros e sem retorno
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <XMarkIcon className="close" onClick={onClose}/>
        <div>
          <h3>Entre ou Cadastre</h3>
          <Link href={'/login/clients'}><button className='button_login'>Cliente</button></Link>

          <Link href={'/login/piloto'}><button className='button_login'>Piloto</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;


