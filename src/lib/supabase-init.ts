import { supabase } from './supabase';

export async function initializeDatabase() {
  try {
    // Create tables
    const { data: tablesData, error: tablesError } = await supabase
      .from('blogs')
      .select('id')
      .limit(1);

    if (tablesError && tablesError.code === '42P01') {
      // Tables don't exist, create them
      const { error } = await supabase.rpc('create_app_tables');
      if (error) {
        console.error('Error creating tables:', error);
        return;
      }
    }

    // Check if settings table exists
    const { data: settingsData, error: settingsError } = await supabase
      .from('settings')
      .select('id')
      .limit(1);

    if (settingsError && settingsError.code === '42P01') {
      // Settings table doesn't exist, create it
      const { error } = await supabase.rpc('create_settings_table');
      if (error) {
        console.error('Error creating settings table:', error);
        return;
      }
    }

    // Initialize settings if empty
    const { data: settings } = await supabase
      .from('settings')
      .select('*')
      .single();

    if (!settings) {
      const { error: insertError } = await supabase
        .from('settings')
        .insert([
          {
            id: '1',
            whatsapp_link: '',
            updated_at: new Date().toISOString()
          }
        ]);

      if (insertError) {
        console.error('Error initializing settings:', insertError);
      }
    }
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}