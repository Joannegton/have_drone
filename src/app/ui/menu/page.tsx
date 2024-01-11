'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/16/solid' 


import './style.css';
import eu from '../../../../public/eu.jpg';
import Modal from './modal/modal';

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const logo = eu;
  const [isModalOpen, setModalOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  const openModal = () => {
    setModalOpen(true);
    setMenuOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <main>
        <nav>
          <Image className='image' src={logo} width={80} height={80} alt="Picture of the author" />
          <Bars3Icon className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} />

          <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
            {isMenuOpen && (
              <>
                <div className="container_menu">
                  <Image className='image' src={logo} width={70} height={70} alt="Picture of the author" />
                  <button className='button_login' onClick={openModal}>Login</button>
                  <Bars3Icon className='menu-icon' onClick={toggleMenu} />
                </div>
              </>
            )}
            <ul>
              <li>
                <Link className='link' href={'/'}>Home</Link>
              </li>
              <li>
                <Link className='link' href={'/operation'}>Como funciona</Link>
              </li>
              <li>
                <Link className='link' href={'/locate'}>Alugar</Link>
              </li>
              <li>
                <Link className='link' href={'/pilot'}>Pilotar</Link>
              </li>
            </ul>
            <button className='button_login button_screem' onClick={openModal}>Login</button>
          </div>
        </nav>
      </main>

      {/* Renderize o Modal apenas se isModalOpen for true */}
      {isModalOpen && <Modal onClose={closeModal} />}
    
    </>
  );
}
