import React from 'react';

import { useApp } from "../hooks/AppContext";
import { BsMoon, BsSun } from "react-icons/bs"

export function ThemeToggle() {
  const { isThemeDark, setIsThemeDark } = useApp();

  return (
    <div className='change-theme' onClick={() => setIsThemeDark(!isThemeDark)}>
      {isThemeDark ? (
        <BsSun size={25} color="white" />
        ) : (
        <BsMoon size={25} />
      )}
    </div>
  )
}
