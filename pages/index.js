import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";

import { toast } from 'react-toastify';
import Link from 'next/link'

// Api;
import { api } from "../services/api.js";

// Components
import InputMask from 'react-input-mask';

// Icons
import { MdContacts, MdPhone } from 'react-icons/md';
import { GiInjustice } from "react-icons/gi";
import { RiTelegramFill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";

export default function Home() {
  const [cpf, setCpf] = useState();
  const [supported, setSupported] = useState();
  
  const { speak } = useSpeechSynthesis();


  function handleOnChange(event) {
    const value = event.target.value;
    const unmask = value.replace(/[^\d]/g, '');

    setCpf(unmask);
  }

  function speaktext(text) {
    if (!supported) return;

    const voice = window?.speechSynthesis.getVoices().find(item => item.name === "Google português do Brasil");

    speak({
      text: text,
      voice,
    });
  }

  async function handleGetDocuments(event) {
    const idLoading = toast.loading("Buscando suas informações...")
    try {
      event.preventDefault();

      if(!cpf || cpf === "") {
       throw new Error("Por favor, Coloque um CPF no campo indicado!");
      }
      console.log(cpf)
      speaktext("Buscando suas informações");
      
      const { data } = await api.get(`/v1_documents/${cpf}`);
      
      if(data?.error) {
        throw new Error("Não encontramos processos com esse CPF!");
      }

      toast.update(idLoading, { render: message, type: "success", isLoading: false, autoClose: 4000 });


    } catch (error) {
      const message = error?.message ?? "Ops, Ocorreu um erro, tente novamente!";
      speaktext(message);
      toast.update(idLoading, { render: message, type: "error", isLoading: false, autoClose: 4000 });

    } finally {
      setCpf("");
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSupported(true);
    }
  }, []);

  return (
    <div className="home">
      <div className="content">
        <div className="image-container"></div>
        <div className="form">
          <img className="logo" src="./image/logo.png" alt="Logo do projeto Maranhão Legal: Escrita Legal em azul e ao lado a representação geografica do estado do maranhão" title="Logo do projeto Maranhão Legal: Escrita Legal em azul e ao lado a representação geografica do estado do maranhão" />
          <div className="modal">
            <form onSubmit={handleGetDocuments}>
              <div className="form-group">
                <label>Digite seu CPF:</label>
                <InputMask mask="999-999-999-99" value={cpf} onChange={handleOnChange}/>

                <button className="primary" type="submit">Buscar processos</button>
              </div>
            </form>
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
