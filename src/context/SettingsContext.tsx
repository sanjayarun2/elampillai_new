import React, { createContext, useContext, useState, useEffect } from 'react';
import { settingsService } from '../services/settingsService';

interface SettingsContextType {
  whatsappLink: string;
  setWhatsappLink: (link: string) => void;
  loading: boolean;
  error: Error | null;
}

const SettingsContext = createContext<SettingsContextType>({
  whatsappLink: '',
  setWhatsappLink: () => {},
  loading: true,
  error: null
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [whatsappLink, setWhatsappLinkState] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const setWhatsappLink = async (link: string) => {
    try {
      const settings = await settingsService.updateSettings(link);
      setWhatsappLinkState(settings.whatsapp_link);
    } catch (err) {
      console.error('Error updating WhatsApp link:', err);
      setError(err instanceof Error ? err : new Error('Failed to update WhatsApp link'));
    }
  };

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await settingsService.getSettings();
        setWhatsappLinkState(settings.whatsapp_link);
        setError(null);
      } catch (err) {
        console.error('Error loading settings:', err);
        setError(err instanceof Error ? err : new Error('Failed to load settings'));
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ whatsappLink, setWhatsappLink, loading, error }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);