import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useSpeechSynthesis } from "react-speech-kit";



import { toast } from 'react-toastify';
import Link from 'next/link'

// Api;
import { api } from "../../services/api.js";

// Context
import { useApp } from "../../hooks/AppContext";

// Icons
import { FaUser } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";

export default function Visuallaw() {
  const [visualLaw, setVisualLaw] = useState();
  const router = useRouter();
  
  useEffect(() => {
    async function fetchVisualLaw(id) {
      try {
        const { data } = await api.get(`https://us-central1-maranhao-legal.cloudfunctions.net/v1_visualLaw/${id}`);

        setVisualLaw(data.data);

      } catch (error) {
        
      }
    }

    if(router?.query?.id) {
      fetchVisualLaw(router?.query?.id)
    }
  }, [router?.query]);

  return (
    <div className="visual-law container">
      <div className="content">
        <h1>Resumo da Sentença</h1>
        <h3><strong>Processo nº:</strong> 5005974-24.2015.8.13.0145</h3>
        <div className="infos">
          <div className="info-item">
            <FaUser size={50} />
            <div className="info-item-content">
              <p>Reclamante (recorrente):</p>
              <h4>Ana Priscila Costa Andrade</h4>
            </div>
          </div>
          <div className="info-item">
            <FaUser size={50} />
            <div className="info-item-content">
              <p>Reclamado (recorrido):</p>
              <h4>Telecomunicações Nordeste LTDA</h4>
            </div>
          </div>
        </div>
        <div className="arrow">
          <img src="/image/arrow-result.png" alt="Linha pontinhalda com duas setas apontada para o reclamente e reclado" title="Linha pontinhalda com duas setas apontada para o reclamente e reclado" />
          <h4>Resultado</h4>
        </div>

        <div className="moviment">
          <img src="/image/hammer.png" alt="Icone de uma martelo batendo em uma base" title="Icone de uma martelo batendo em uma base" />
          <div className="moviment-content">
            <strong>Movimento: Pedido conhecido em parte e procedente</strong>
            <h3>Hope this helps. Be sure to leave comments if you have any thoughts on this article or have any other use case to show. And if you find it helpful, give me a clap 👏 and share it. Thanks for reading!</h3>
          </div>
        </div>
        
        <div className="orientation">
        <div className="icon-container">
            <MdOutlineContactSupport size={35} />
            <h4>Caso ainda tenha duvidas fale com seu advogado ou defensor publico.</h4>
          </div>
        </div>
      {/* <img src="/image/logo-tjma.png" alt="Portal do poder judiciário do estado do maranhão" title="Portal do poder judiciário do estado do maranhão" /> */}
      </div>
    </div>
  )
}
