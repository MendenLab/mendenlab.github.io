// ==========================================
// Menden Lab Website - JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    initMobileNav();
    
    // Smooth Scrolling for Navigation Links
    initSmoothScroll();
    
    // Navbar Scroll Effect
    initNavbarScroll();
    
    // Intersection Observer for Animations
    initScrollAnimations();
    
    // Active Navigation Link Highlight
    initActiveNavLinks();
});

// ==========================================
// Mobile Navigation Toggle
// ==========================================

function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    if (!hamburger || !navMenu) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open on mobile
        if (window.innerWidth <= 768) {
            if (isActive) {
                body.classList.add('menu-open');
            } else {
                body.classList.remove('menu-open');
            }
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Remove menu-open class on window resize if menu is closed
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            body.classList.remove('menu-open');
        }
    });
}

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Navbar Scroll Effect
// ==========================================

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
}

// ==========================================
// Intersection Observer for Scroll Animations
// ==========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and major elements
    const elementsToAnimate = document.querySelectorAll(
        '.research-card, .project-card, .team-card, .section-header'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// ==========================================
// Active Navigation Link Highlight
// ==========================================

function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// Project Card GitHub Stats (Optional Enhancement)
// ==========================================

// This function can be used to fetch real GitHub repository stats
// Uncomment and modify with your actual repository names
/*
async function fetchGitHubStats(repoName) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repoName}`);
        const data = await response.json();
        
        return {
            stars: data.stargazers_count,
            forks: data.forks_count,
            description: data.description
        };
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        return null;
    }
}

// Example usage:
// fetchGitHubStats('your-username/your-repo').then(stats => {
//     console.log(stats);
// });
*/

// ==========================================
// Form Validation (if you add a contact form)
// ==========================================

function initFormValidation() {
    const form = document.querySelector('form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form validation logic here
        const formData = new FormData(form);
        
        // Example: Check if required fields are filled
        let isValid = true;
        
        formData.forEach((value, key) => {
            if (!value.trim()) {
                isValid = false;
                const input = form.querySelector(`[name="${key}"]`);
                input.classList.add('error');
            }
        });
        
        if (isValid) {
            // Submit the form or send data
            console.log('Form is valid. Ready to submit.');
            // form.submit();
        }
    });
}

// ==========================================
// Loading Animation (Optional)
// ==========================================

function initLoadingAnimation() {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    });
}

// ==========================================
// Utility Functions
// ==========================================

// Debounce function for performance optimization
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// Console Message (Fun Easter Egg)
// ==========================================

console.log(
    '%c👋 Welcome to Menden Lab!',
    'color: #000F46; font-size: 20px; font-weight: 500; font-family: Roboto, sans-serif;'
);
console.log(
    '%cInterested in joining our research team? Check out our Apply section!',
    'color: #46C8F0; font-size: 14px; font-family: Roboto, sans-serif;'
);
console.log(
    '%cFind us on GitHub: https://github.com | Built with Material Design 3',
    'color: #ABC1A7; font-size: 12px; font-family: Roboto, sans-serif;'
);

