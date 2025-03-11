import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gvtswlvfpmepszgbtftq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dHN3bHZmcG1lcHN6Z2J0ZnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNjM2NzMsImV4cCI6MjA1NjkzOTY3M30.9a_DT2w912RT1-vV6ZWZRPG4-GY2fPeX1-P-1XWAuuE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);