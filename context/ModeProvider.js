import React, { useState } from 'react';
import ModeContext from './Modecontext';

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('customer'); // Manages the role
  const [isDisabled, setIsDisabled] = useState(false); // Manages button disable state
  console.log('Reached here ModeProvider.js');

  const toggleRole = () => {
    setIsDisabled(true); // Disable the button
    setTimeout(() => {
      setMode((prevMode) => (prevMode === 'customer' ? 'farmer' : 'customer'));
      console.log('Role changed');
      setIsDisabled(false); // Re-enable the button after 4 seconds
    }, 1000);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleRole, isDisabled }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
