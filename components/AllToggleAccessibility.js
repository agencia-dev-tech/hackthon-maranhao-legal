import React from 'react';
import { ContrastToggle } from './ContrastToggle';

// Components
import { SoundToggle } from "./SoundToggle";
import { ThemeToggle } from "./ThemeToggle";

export function AllToggleAccessibility() {

  return (
    <div className="all-toggle">
      <ContrastToggle />
      <SoundToggle />
      <ThemeToggle />
    </div>
  )
}
