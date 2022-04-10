import React from 'react';

import { useApp } from "../hooks/AppContext";
import { MdOutlineRecordVoiceOver, MdOutlineVoiceOverOff } from "react-icons/md"

export function SoundToggle() {
  const { supported, setSupported,  isThemeDark, isContrast} = useApp();
  const color = (isThemeDark || isContrast) ? "#fff" : "#303030";

  return (
    <div onClick={() => setSupported(!supported)}>
      {supported ? (
        <MdOutlineRecordVoiceOver size={25} color={color} />
        ) : (
        <MdOutlineVoiceOverOff size={25} color={color} />
      )}
    </div>
  )
}
