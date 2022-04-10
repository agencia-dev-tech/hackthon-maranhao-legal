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
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Visuallaw() {
  const router = useRouter();
  
  useEffect(() => {
    if(router?.query?.id) {
      console.log(router?.query?.id)
    }
  }, [router?.query]);

  return (
    <div className="visual-law container">
    
    </div>
  )
}
