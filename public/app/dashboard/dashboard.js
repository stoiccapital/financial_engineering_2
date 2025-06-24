// Dashboard functionality
let supabaseClient;

// Initialize Supabase client
try {
    if (typeof SUPABASE_CONFIG === 'undefined') {
        throw new Error('Supabase configuration not found');
    }
    
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    
} catch (error) {
    console.error('Supabase initialization error:', error.message);
    window.location.href = '/website/signin/signin.html';
}

// Check if user is authenticated
async function checkAuth() {
    try {
        const { data: { user }, error } = await supabaseClient.auth.getUser();
        
        if (error || !user) {
            // User not authenticated, redirect to sign in
            window.location.href = '/website/signin/signin.html';
            return;
        }
        
        // Display user information
        displayUserInfo(user);
        
    } catch (error) {
        console.error('Auth check error:', error);
        window.location.href = '/website/signin/signin.html';
    }
}

// Display user information
function displayUserInfo(user) {
    const userDetails = document.getElementById('userDetails');
    
    if (userDetails) {
        userDetails.innerHTML = `
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>User ID:</strong> ${user.id}</p>
            <p><strong>Last Sign In:</strong> ${new Date(user.last_sign_in_at).toLocaleString()}</p>
        `;
    }
}

// Sign out function
async function signOut() {
    try {
        const { error } = await supabaseClient.auth.signOut();
        
        if (error) {
            console.error('Sign out error:', error);
            alert('Error signing out. Please try again.');
        } else {
            // Redirect to main website homepage
            window.location.href = '/';
        }
    } catch (error) {
        console.error('Sign out error:', error);
        alert('Error signing out. Please try again.');
    }
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication on page load
    checkAuth();
    
    // Add click handlers for dashboard cards
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.closest('.dashboard-card').querySelector('h3').textContent;
            alert(`${cardTitle} feature coming soon!`);
        });
    });
}); 