import { supabase } from './supabase';

export async function initializeDatabase() {
  try {
    // Create settings table if it doesn't exist
    const { error: settingsTableError } = await supabase.query(`
      CREATE TABLE IF NOT EXISTS settings (
        id TEXT PRIMARY KEY,
        whatsapp_link TEXT,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    if (settingsTableError) {
      console.error('Error creating settings table:', settingsTableError);
    }

    // Create blogs table if it doesn't exist
    const { error: blogsTableError } = await supabase.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        date TEXT NOT NULL,
        author TEXT NOT NULL,
        image TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    if (blogsTableError) {
      console.error('Error creating blogs table:', blogsTableError);
    }

    // Create shops table if it doesn't exist
    const { error: shopsTableError } = await supabase.query(`
      CREATE TABLE IF NOT EXISTS shops (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        description TEXT NOT NULL,
        rating NUMERIC(3,1) NOT NULL,
        phone TEXT,
        category TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    if (shopsTableError) {
      console.error('Error creating shops table:', shopsTableError);
    }

    // Create products table if it doesn't exist
    const { error: productsTableError } = await supabase.query(`
      CREATE TABLE IF NOT EXISTS products (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(10,2) NOT NULL,
        seller TEXT NOT NULL,
        whatsapp_link TEXT NOT NULL,
        image TEXT NOT NULL,
        category TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    if (productsTableError) {
      console.error('Error creating products table:', productsTableError);
    }

    // Initialize settings if not exists
    const { data: existingSettings } = await supabase
      .from('settings')
      .select('*')
      .single();

    if (!existingSettings) {
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

    // Add sample blog post if none exist
    const { data: existingPosts } = await supabase
      .from('blogs')
      .select('id')
      .limit(1);

    if (!existingPosts?.length) {
      const { error: blogError } = await supabase
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

      if (blogError) {
        console.error('Error creating sample blog post:', blogError);
      }
    }
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}