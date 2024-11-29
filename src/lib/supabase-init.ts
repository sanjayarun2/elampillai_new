import { supabase } from './supabase';

export async function initializeDatabase() {
  // Create settings table
  const { error: settingsError } = await supabase.rpc('create_settings_table');
  if (settingsError && !settingsError.message.includes('already exists')) {
    console.error('Error creating settings table:', settingsError);
  }

  // Insert initial settings if not exists
  const { error: insertError } = await supabase
    .from('settings')
    .upsert([
      {
        id: '1',
        whatsapp_link: '',
        updated_at: new Date().toISOString()
      }
    ], {
      onConflict: 'id'
    });

  if (insertError) {
    console.error('Error inserting initial settings:', insertError);
  }

  // Create other tables if they don't exist
  const { error: tablesError } = await supabase.rpc('create_app_tables');
  if (tablesError && !tablesError.message.includes('already exists')) {
    console.error('Error creating tables:', tablesError);
  }
}