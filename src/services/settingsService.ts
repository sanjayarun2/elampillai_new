import { supabase } from '../lib/supabase';

interface Settings {
  id: string;
  whatsapp_link: string;
}

export const settingsService = {
  async getSettings() {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .single();

    if (error) throw error;
    return data as Settings;
  },

  async updateSettings(whatsappLink: string) {
    const { data, error } = await supabase
      .from('settings')
      .update({ whatsapp_link: whatsappLink })
      .eq('id', '1')
      .select()
      .single();

    if (error) throw error;
    return data as Settings;
  }
};