import React from 'react';

import { useApp } from "../hooks/AppContext";
import { CgDarkMode } from "react-icons/cg"

export function ContrastToggle() {
  const { isContrast, setIsContrast, isThemeDark } = useApp();
  const color = (isThemeDark || isContrast) ? "#fff" : "#303030";
  
  return (
    <div onClick={() => setIsContrast(!isContrast)}>
      {isContrast ? (
        <CgDarkMode size={25} color={color} />
        ) : (
        <CgDarkMode size={25} color={color} />
      )}
    </div>
  )
}
