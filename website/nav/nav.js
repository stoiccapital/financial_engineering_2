// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    
    // Find all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if current path matches link path
        if (currentPath === linkPath || 
            (currentPath === '/index/' && linkPath === '/index/') ||
            (currentPath === '/signin/signin.html' && linkPath === '/signin/signin.html') ||
            (currentPath.startsWith('/blogs/') && linkPath === '/blogs/')) {
            link.classList.add('active');
        }
    });
    
    // Handle mobile menu toggle (if needed in future)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});

// Function to include navigation in pages
function includeNavigation() {
    fetch('/nav/nav.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Re-run navigation logic after including nav
            const currentPath = window.location.pathname;
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href');
                
                if (currentPath === linkPath || 
                    (currentPath === '/index/' && linkPath === '/index/') ||
                    (currentPath === '/signin/signin.html' && linkPath === '/signin/signin.html') ||
                    (currentPath.startsWith('/blogs/') && linkPath === '/blogs/')) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });
} 