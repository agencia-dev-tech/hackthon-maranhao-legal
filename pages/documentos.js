import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useRouter } from 'next/router';


import { toast } from 'react-toastify';
import Link from 'next/link'

// Api;
import { api } from "../services/api.js";

// Context
import { useApp } from "../hooks/AppContext";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

// Componets
import { ThemeToggle } from '../components/ThemeToggle.js';

export default function Documentos() {
  const { docs } = useApp();
  const router = useRouter();
  
  useEffect(() => {
    if(!docs) {
      router.push("/")
    }
  }, [docs]);

  return (
    <div className="documents container">
    
      <h1>Veja seus processos abaixo: </h1>

      <ThemeToggle />

      <div className="info">
        <div className="icon-container">
          <FaUserAlt size={15} />
          <h4>{docs?.name}</h4>
        </div>
        <div className="flex">
          <div className="icon-container">
            <HiOutlineDocumentText size={15} />
            <h4>{docs?.cpf}</h4>
          </div>

          {/* <h4>Registros até 2022</h4> */}
          
        </div>
        
      </div>
      {docs?.documents.map(item => {
        return (
          <Link href={`visualaw/${item.id}`} key={item.id} passHref >
            <div className="document">
              <p><strong>Processo:</strong> {item.name}</p>
              <p><strong>Numero:</strong> {item.id}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
