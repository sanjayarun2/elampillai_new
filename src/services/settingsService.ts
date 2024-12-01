// src/services/settingsService.ts
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, 
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Settings {
  whatsapp_link: string;
}

export const settingsService = {
  async getSettings(): Promise<Settings> {
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('whatsapp_link')
        .single();

      if (error) {
        console.error('Error fetching settings:', error);
        return { whatsapp_link: '' };
      }

      return { whatsapp_link: data?.whatsapp_link || '' };
    } catch (err) {
      console.error('Unexpected error:', err);
      return { whatsapp_link: '' };
    }
  },

  async updateSettings(whatsappLink: string): Promise<Settings> {
    try {
      const { data, error } = await supabase
        .from('settings')
        .upsert({ whatsapp_link: whatsappLink })
        .select()
        .single();

      if (error) {
        console.error('Error updating settings:', error);
        throw error;
      }

      return { whatsapp_link: data?.whatsapp_link || '' };
    } catch (err) {
      console.error('Unexpected error:', err);
      throw err;
    }
  }
};