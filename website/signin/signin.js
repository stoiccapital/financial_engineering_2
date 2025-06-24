// Initialize Supabase client
// Load configuration from config.js
let supabaseClient

try {
    // Check if config is loaded
    if (typeof SUPABASE_CONFIG === 'undefined') {
        throw new Error('Supabase configuration not found. Please check config.js')
    }
    
    // Validate configuration
    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL' || SUPABASE_CONFIG.anonKey === 'YOUR_SUPABASE_ANON_KEY') {
        throw new Error('Please update your Supabase credentials in config.js')
    }
    
    // Create Supabase client
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
    
} catch (error) {
    console.error('Supabase initialization error:', error.message)
    // Show error message on page
    document.addEventListener('DOMContentLoaded', () => {
        const messageDiv = document.getElementById('message')
        if (messageDiv) {
            messageDiv.innerHTML = `<div class="error">Configuration Error: ${error.message}</div>`
        }
    })
}

// DOM elements
const signinForm = document.getElementById('signinForm')
const signinBtn = document.getElementById('signinBtn')
const loading = document.getElementById('loading')
const messageDiv = document.getElementById('message')

// Show message function
function showMessage(message, type = 'error') {
    if (messageDiv) {
        messageDiv.innerHTML = `<div class="${type}">${message}</div>`
        setTimeout(() => {
            messageDiv.innerHTML = ''
        }, 5000)
    }
}

// Handle form submission
if (signinForm) {
    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        
        // Check if Supabase is initialized
        if (!supabaseClient) {
            showMessage('Supabase is not configured. Please check your configuration.')
            return
        }
        
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        // Show loading state
        signinBtn.disabled = true
        loading.classList.add('show')

        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            })

            if (error) {
                showMessage(error.message)
            } else {
                showMessage('Successfully signed in!', 'success')
                // Redirect to dashboard
                setTimeout(() => {
                    window.location.href = '/dashboard/dashboard.html'
                }, 1000)
            }
        } catch (error) {
            showMessage('An unexpected error occurred. Please try again.')
            console.error('Sign in error:', error)
        } finally {
            signinBtn.disabled = false
            loading.classList.remove('show')
        }
    })
}

// Show sign up page (placeholder function)
function showSignUp() {
    alert('Navigate to sign up page')
    // window.location.href = '/signup'
}

// Check if user is already signed in
async function checkUser() {
    if (!supabaseClient) {
        console.error('Supabase not initialized')
        return
    }
    
    try {
        const { data: { user } } = await supabaseClient.auth.getUser()
        if (user) {
            window.location.href = '/dashboard/dashboard.html'
        }
    } catch (error) {
        console.error('Error checking user:', error)
    }
}

// Check user on page load
document.addEventListener('DOMContentLoaded', () => {
    checkUser()
})
