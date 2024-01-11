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
        <button className='button_login'><Link href={'/login/clients'}>Cliente</Link></button>
        <button className='button_login'><Link href={'/login/piloto'}>Piloto</Link></button>
      </div>

        
        
      </div>
    </div>
  );
};

export default Modal;


