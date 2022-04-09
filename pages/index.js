import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Link from 'next/link'
import { MdContacts, MdPhone } from 'react-icons/md';
import { GiInjustice } from "react-icons/gi";
import { RiTelegramFill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";


export default function Home() {
  const [cpf, setCpf] = useState();

  function onChange(event) {
    const value = event.target.value;

    setCpf(value);
  }

  function handleGetDocuments(){
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className="home">
      <div className="content">
        <div className="image-container"></div>
        <div className="form">
          <img className="logo" src="./image/logo.png" alt="Logo do projeto Maranhão Legal: Escrita Legal em azul e ao lado a representação geografica do estado do maranhão" title="Logo do projeto Maranhão Legal: Escrita Legal em azul e ao lado a representação geografica do estado do maranhão" />
          <div className="modal">
            <div className="form-group">
              <label>Digite seu CPF:</label>
              <InputMask mask="999-999-999-99" />

              <button className="primary">Buscar processos</button>
            </div>
          </div>
          <div className="contact">
            <div className="icon-container">
              <MdContacts size={20} />
              <h2>Contatos</h2>
            </div>
            <div className="content">
              <div className="group"> 
                
                <Link href="http://informatica.tjmg.jus.br">
                  <a target="_blank" >
                    <div className="icon-container">
                      <GiInjustice size={15}/>
                      <h3>Tribunal Geral de São Luis</h3>
                    </div>
                    <h4>www.informatica.tjmg.jus.br</h4>
                  </a>
                </Link>

                <Link href="tel:+08007071581">
                  <a target="_blank" >
                    <div className="icon-container">
                      <MdPhone size={15}/>
                      <h3>Telejudiciário</h3>
                    </div>
                    <h4>0800-7071-581</h4>
                  </a>
                </Link>
              </div>
              <div className="group"> 
                <Link href="https://t.me/puxardadosgrati">
                  <a target="_blank" >
                    <div className="icon-container">
                      <RiTelegramFill size={15}/>
                      <h3>Telegram</h3>
                    </div>
                    <h4>t.me/puxardadosgrati</h4>
                  </a>
                </Link>
                <Link href="#">
                  <a target="_blank" >
                    <div className="icon-container">
                      <HiSpeakerphone size={15}/>
                      <h3>Plantão do PJE</h3>
                    </div>
                    <h4>t.me/puxardadosgrati</h4>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <img className="partners" src="./image/parceiros.png" alt="Logo do projeto Maranhão Legal: Escrita Legal em azul e ao lado a representação geografica do estado do maranhão" title="Logo do projeto Maranhão Legal: Escrita Legal em azul e ao lado a representação geografica do estado do maranhão" />
        </div>
      </div>
    </div>
  )
}
