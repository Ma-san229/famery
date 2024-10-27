import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xzlstgwezpkmgiivoidd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6bHN0Z3dlenBrbWdpaXZvaWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTI3NDEsImV4cCI6MjA0MzE4ODc0MX0.y0732QD-Vl5tUdl-2kyMEr1G5qbw05FMDofaoWgEbBs'

export const supabase = createClient(supabaseUrl, supabaseKey)