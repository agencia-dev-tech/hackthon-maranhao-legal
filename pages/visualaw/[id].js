import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useSpeechSynthesis } from "react-speech-kit";



import { toast } from 'react-toastify';
import Link from 'next/link'

// Api;
import { api } from "../../services/api.js";

// Utils
import { generateLinkWhasApp } from "../../utils/index.js";

// Context
import { useApp } from "../../hooks/AppContext";

// Icons
import { FaUser } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsFillPrinterFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillSound } from "react-icons/ai";


function Visuallaw({href}) {
  const [visualLaw, setVisualLaw] = useState();
  const router = useRouter();

   const { speaktext } = useApp();
  
  function handlePrintVisualLaw() {
    window?.print();
  }

  function handldeHearDocument() {
    console.log("joans")
    speaktext("Resumo da Sentença");
    
    speaktext(`CPF: ${visualLaw?.data?.cpf}`);
    speaktext(`Processo de numero: ${visualLaw?.data?.processNumber}`);

    speaktext(`Ultima Atualização: ${visualLaw?.data?.distributionDate}`);
    speaktext(`Órgão Julgador: ${visualLaw?.pdfData?.judgingBody}`);
    speaktext(`Jurisdição: ${visualLaw?.pdfData?.jurisdiction}`);
    speaktext(`Classe Judicial: ${visualLaw?.pdfData?.judicialClass}`);

    speaktext(`Reclamado: ${visualLaw?.pdfData?.defendant}`);

    speaktext(`Resultado`);
    speaktext(`Movimento: ${visualLaw?.pdfData?.conclusion}`);
    speaktext(visualLaw?.pdfData?.defendant);

     speaktext(`Caso ainda tenha dúvidas, fale com seu advogado(a) ou defensor(a) público(a).`);
  }

  useEffect(() => {
    async function fetchVisualLaw(id) {
      try {
        const { data } = await api.get(`https://us-central1-maranhao-legal.cloudfunctions.net/v1_visualLaw/${id}`);
        // console.log(data.data)
        setVisualLaw(data);

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
        <div className="buttons">

          <button onClick={handlePrintVisualLaw}>
            <div className="icon-container">
              <BsFillPrinterFill size={20} />
              <p>Imprimir</p>
            </div>
          </button>

          <button onClick={handldeHearDocument}>
            <div className="icon-container">
              <AiFillSound size={20} />
              <p>Ouvir</p>
            </div>
          </button>

          <button >
            <a href={generateLinkWhasApp(href)} data-action="share/whatsapp/share" target="_blank" rel="noreferrer">
              <div className="icon-container">
                <IoLogoWhatsapp size={20} />
                <p>Compartilhar</p>
              </div>
            </a>
          </button>

        </div>
        <h1>Resumo da Sentença</h1>
        <div className="info-header">
          <div className="info-header-content">
            <h3><strong>CPF:</strong> {visualLaw?.data?.cpf}</h3>
            <h3><strong>Processo nº:</strong> {visualLaw?.data?.processNumber}</h3>
          </div>
          <div className="info-header-content">
            <h3><strong>Ultima Atualização:</strong> {visualLaw?.data?.distributionDate}</h3>
            <h3><strong>Órgão Julgador:</strong> {visualLaw?.data?.judgingBody}</h3>
          </div>
          <div className="info-header-content">
            <h3><strong>Jurisdição:</strong> {visualLaw?.data?.jurisdiction}</h3>
            <h3><strong>Classe Judicial:</strong> {visualLaw?.data?.judicialClass}</h3>
          </div>
        </div>
        <div className="infos">
          <div className="info-item">
            <FaUser size={50} />
            <div className="info-item-content">
              <p>Reclamante (recorrente):</p>
              <h4>{visualLaw?.pdfData?.author}</h4>
            </div>
          </div>
          <div className="info-item">
            <FaUser size={50} />
            <div className="info-item-content">
              <p>Reclamado (recorrido):</p>
              <h4>{visualLaw?.pdfData?.defendant}</h4>
            </div>
          </div>
        </div>
        <div className="arrow">
          <img src="/image/arrow-result.png" alt="Linha pontinhalda com duas setas apontada para o reclamente e reclado" title="Linha pontinhalda com duas setas apontada para o reclamente e reclado" longdesc="#linhaPontinhada"/>
          <h4>Resultado</h4>
        </div>

        <div className="moviment">
          <img src="/image/hammer.png" alt="Icone de uma martelo batendo em uma base" title="Icone de uma martelo batendo em uma base" longdesc="#martelo" />
          <div className="moviment-content">
            <strong>Movimento: {visualLaw?.pdfData?.conclusion}</strong>
            <h3>{visualLaw?.data.description}</h3>
          </div>
        </div>
        
        <div className="orientation">
        <div className="icon-container">
            <MdOutlineContactSupport size={35} />
            <h4>Caso ainda tenha dúvidas, fale com seu advogado(a) ou defensor(a) público(a).</h4>
          </div>
        </div>
      {/* <img src="/image/logo-tjma.png" alt="Portal do poder judiciário do estado do maranhão" title="Portal do poder judiciário do estado do maranhão" /> */}
      </div>
    </div>
  )
}

export default Visuallaw;