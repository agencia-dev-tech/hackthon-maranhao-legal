import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Link from 'next/link'


export default function Home() {
  const [cpf, setCpf] = useState();

  function onChange(event) {
    const value = event.target.value;

    setCpf(value);
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
            <div className="contact-item">
              <h3>Tribunal Geral de São Luis</h3>
              <div className="contact-item-content">
                <Link href="http://informatica.tjmg.jus.br" ><a target="_blank" >http://informatica.tjmg.jus.br</a></Link>
              </div>
            </div>
          </div>
          <img className="partners" src="./image/parceiros.png" alt="Logo do projeto Maranhão Legal: Escrita Legal em azul e ao lado a representação geografica do estado do maranhão" title="Logo do projeto Maranhão Legal: Escrita Legal em azul e ao lado a representação geografica do estado do maranhão" />
        </div>
      </div>
    </div>
  )
}
