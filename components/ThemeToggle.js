import React from 'react';

import { themesOptions, useApp } from "../hooks/AppContext";
import { BsMoon, BsSun } from "react-icons/bs"

export function ThemeToggle() {
  const { theme, setTheme } = useApp();

  const themeButtonStyle = {position: "absolute", top: 40, right: 40, border: 'none', backgroundColor: 'transparent'}

  return (
    <>
      {theme === themesOptions.light ? (
      <button style={themeButtonStyle} onClick={() => setTheme(themesOptions.dark)}>
        <BsMoon size={25} />
      </button>
    ) : (
      <button style={themeButtonStyle} onClick={() => setTheme(themesOptions.light)}>
        <BsSun size={25} color="white" />
      </button>
    )}
    </>
  )
}
