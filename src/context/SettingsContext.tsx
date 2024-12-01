// src/context/SettingsContext.tsx

import React, { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext({
  whatsappLink: '',
  setWhatsappLink: (link: string) => {},
});

export const SettingsProvider: React.FC = ({ children }) => {
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    // Fetch the WhatsApp link from your source (API, local storage, etc.)
    setWhatsappLink('https://wa.me/1234567890'); // Example link, replace it with dynamic fetching logic
  }, []);

  return (
    <SettingsContext.Provider value={{ whatsappLink, setWhatsappLink }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
