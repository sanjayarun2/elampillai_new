-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create settings table function
CREATE OR REPLACE FUNCTION create_settings_table()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'settings') THEN
    CREATE TABLE settings (
      id TEXT PRIMARY KEY,
      whatsapp_link TEXT,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  END IF;
END;
$$;

-- Create application tables function
CREATE OR REPLACE FUNCTION create_app_tables()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  -- Create blogs table
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'blogs') THEN
    CREATE TABLE blogs (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      date TEXT NOT NULL,
      author TEXT NOT NULL,
      image TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  END IF;

  -- Create shops table
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'shops') THEN
    CREATE TABLE shops (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name TEXT NOT NULL,
      address TEXT NOT NULL,
      description TEXT NOT NULL,
      rating NUMERIC(3,1) NOT NULL,
      phone TEXT,
      category TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  END IF;

  -- Create products table
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'products') THEN
    CREATE TABLE products (
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
  END IF;
END;
$$;