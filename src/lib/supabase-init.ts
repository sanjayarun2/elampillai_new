import { supabase } from './supabase';

export async function initializeDatabase() {
  try {
    // Check if settings table exists
    const { data: settingsData, error: settingsError } = await supabase
      .from('settings')
      .select('id')
      .limit(1);

    if (settingsError && settingsError.code === '42P01') {
      // Settings table doesn't exist, create it
      const { error } = await supabase
        .from('settings')
        .insert([
          {
            id: '1',
            whatsapp_link: '',
            updated_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Error creating settings:', error);
      }
    }

    // Check if blogs table exists and add sample post if empty
    const { data: blogsData, error: blogsError } = await supabase
      .from('blogs')
      .select('id')
      .limit(1);

    if (!blogsData || blogsData.length === 0) {
      const { error } = await supabase
        .from('blogs')
        .insert([
          {
            title: 'Welcome to Elampillai Community',
            content: 'This is our first blog post. Stay tuned for more updates about our community!',
            date: new Date().toISOString().split('T')[0],
            author: 'Admin',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
          }
        ]);

      if (error) {
        console.error('Error creating sample blog post:', error);
      }
    }
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}