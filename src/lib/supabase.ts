import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = 'https://seoxweqqaqnmmfbrjsys.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlb3h3ZXFxYXFubW1mYnJqc3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MTI1MTksImV4cCI6MjA0ODM4ODUxOX0.spXyYzop4LG_AHbltW6S60gynx2YHOTyqaKSIRjfRlU';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);