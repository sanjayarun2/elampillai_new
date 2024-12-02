// src/context/SettingsContext.tsx

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface SettingsContextType {
  whatsappLink: string;
  setWhatsappLink: (link: string) => void;
}

// Default context value
const SettingsContext = createContext<SettingsContextType>({
  whatsappLink: '',
  setWhatsappLink: () => {},
});

interface SettingsProviderProps {
  children: ReactNode;  // Explicitly typing children as ReactNode
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [whatsappLink, setWhatsappLink] = useState<string>('');

  useEffect(() => {
    // Example link, replace it with dynamic fetching logic
    setWhatsappLink('https://wa.me/1234567890');
  }, []);

  return (
    <SettingsContext.Provider value={{ whatsappLink, setWhatsappLink }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
