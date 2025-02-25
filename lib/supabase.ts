import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qjvdrhwtxyceipxhqtdd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqdmRyaHd0eHljZWlweGhxdGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MDQ3ODYsImV4cCI6MjA0MTE4MDc4Nn0.cSbXrO6YQKJyfUN9iC5ItgiU_xcxtDkmLkonSBQDTME'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})