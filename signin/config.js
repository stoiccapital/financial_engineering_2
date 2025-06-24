// Supabase Configuration
// Your Supabase project credentials
const SUPABASE_CONFIG = {
    url: 'https://snlbzmhhrtctesdoicwo.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubGJ6bWhocnRjdGVzZG9pY3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MDA2NDYsImV4cCI6MjA2NjM3NjY0Nn0.GKZ-3lTPd8b38hg4v_hUZD4I1hF165gzwwHin7F_hFU'
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG
} 