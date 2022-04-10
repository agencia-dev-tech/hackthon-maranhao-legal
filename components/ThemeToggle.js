import React from 'react';

import { useApp } from "../hooks/AppContext";
import { BsMoon, BsSun } from "react-icons/bs"

export function ThemeToggle() {
  const { isThemeDark, setIsThemeDark, isContrast } = useApp();

  const color = (isThemeDark || isContrast) ? "#fff" : "#303030";
  
  return (
    <div onClick={() => setIsThemeDark(!isThemeDark)}>
      {isThemeDark ? (
        <BsSun size={25} color={color} />
        ) : (
        <BsMoon size={25} color={color} />
      )}
    </div>
  )
}
