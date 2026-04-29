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

    // Team directory tab filtering
    initTeamCards();
    initTeamTabs();

    // Research publications cards
    initRecentWorks();
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
// Team Card Content
// ==========================================

function initTeamCards() {
    const directory = document.querySelector('.team-directory[data-enhance-profiles="true"]');
    if (!directory) return;

    const cards = directory.querySelectorAll('.team-card');
    if (!cards.length) return;

    const interestsByName = {
        'Dr Göksu Avar': 'AI-guided translational modelling for precision therapies.',
        'Alina J Arneth': 'Drug response prediction across multi-omics cancer cohorts.',
        'Xixi Li': 'Interpretable deep learning for clinical biomarker discovery.',
        'Linpeng Xie': 'Synergy modelling for combination treatment optimisation.',
        'Xuan Liu': 'Robust machine learning for heterogeneous biomedical data.',
        'Qiyang Wu': 'Statistical learning methods for pharmacogenomics pipelines.',
        'Daksh Pamar': 'Computational methods for drug sensitivity prediction.',
        'Wenjie Shan': 'Data-driven target prioritisation in translational oncology.',
        'Chen Gong': 'Representation learning for multimodal molecular profiling.',
        'Anthony Basilone': 'Benchmarking AI models for therapeutic decision support.',
        'Liam Mcinerney': 'Applied bioinformatics for translational research workflows.',
        'I Putu Prakasa Wiprayoga': 'Predictive modelling of treatment response signatures.',
        'Keisuke Yasuda': 'Network-based analyses for disease mechanism inference.',
        'Jesamine Newman': 'Machine learning methods for patient stratification.',
        'Yazhu Liu': 'Honours project on explainable models in pharmacogenomics.',
        'Nicolo Fabila': 'Foundation models and AI systems for drug discovery.'
    };

    const iconLinks = `
        <div class="team-links" aria-label="Profile links">
            <a href="#" class="team-link" aria-label="GitHub profile" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.844c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" class="team-link" aria-label="Email" title="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="#" class="team-link" aria-label="LinkedIn profile" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.369-1.85c3.601 0 4.267 2.369 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124a2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9H7.12v11.452z"/></svg>
            </a>
            <a href="#" class="team-link" aria-label="Google Scholar profile" title="Google Scholar">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3L1 9l11 6l9-4.91V17h2V9L12 3Zm0 14l-7-3.82V17c0 2.76 3.13 5 7 5s7-2.24 7-5v-3.82L12 17Z"/></svg>
            </a>
        </div>
    `;

    cards.forEach(card => {
        const name = card.querySelector('.team-info h3')?.textContent?.trim();
        const info = card.querySelector('.team-info');
        if (!name || !info) return;

        if (!info.querySelector('.team-interest')) {
            const interest = document.createElement('p');
            interest.className = 'team-interest';
            interest.textContent = interestsByName[name] || 'Computational pharmacogenomics and translational AI research.';
            info.appendChild(interest);
        }

        if (!info.querySelector('.team-links')) {
            info.insertAdjacentHTML('beforeend', iconLinks);
        }
    });
}

// ==========================================
// Team Directory Tabs
// ==========================================

function initTeamTabs() {
    const tabs = document.querySelectorAll('.team-tab');
    const cards = document.querySelectorAll('.team-card');
    const emptyState = document.querySelector('.team-empty-state');

    if (!tabs.length || !cards.length) return;

    const setActiveTab = (activeTab) => {
        tabs.forEach(tab => {
            const isActive = tab === activeTab;
            tab.classList.toggle('is-active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    };

    const filterCards = (filterValue) => {
        const normalizedFilter = (filterValue || 'all').toLowerCase().trim();
        let visibleCards = 0;

        cards.forEach(card => {
            const categories = card.dataset.teamCategory || '';
            const categoryList = categories
                .toLowerCase()
                .split(/\s+/)
                .filter(Boolean);
            const shouldShow = normalizedFilter === 'all' || categoryList.includes(normalizedFilter);

            card.hidden = !shouldShow;
            card.classList.toggle('is-hidden', !shouldShow);
            if (shouldShow) visibleCards += 1;
        });

        if (emptyState) {
            emptyState.hidden = visibleCards > 0;
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filterValue = tab.dataset.teamFilter || 'all';
            setActiveTab(tab);
            filterCards(filterValue);
        });
    });

    const initiallyActiveTab = document.querySelector('.team-tab.is-active') || tabs[0];
    if (initiallyActiveTab) {
        setActiveTab(initiallyActiveTab);
        filterCards(initiallyActiveTab.dataset.teamFilter || 'all');
    }
}

// ==========================================
// Recent Works Publications
// ==========================================
async function initRecentWorks() {
    const container = document.querySelector('#recent-works-grid');
    if (!container) return;

    try {
        const source = await loadPublicationsTsSource();
        const publications = parsePublicationsFromTs(source);
        const latestPublications = getLatestPublications(publications, 4);
        renderRecentWorks(container, latestPublications);
    } catch (error) {
        console.error(error);
        const isFileProtocol = window.location.protocol === 'file:';
        const message = isFileProtocol
            ? 'Recent publications are unavailable in file preview. Open with a local server or GitHub Pages.'
            : 'Recent publications are temporarily unavailable.';
        container.innerHTML = `
            <article class="recent-work-card recent-work-card--loading">
                <p>${message}</p>
            </article>
        `;
    }
}

async function loadPublicationsTsSource() {
    const urls = [
        './publications.ts',
        'publications.ts',
        '/publications.ts',
        new URL('publications.ts', window.location.href).toString(),
    ];

    for (const url of urls) {
        try {
            const response = await fetch(url, { cache: 'no-store' });
            if (!response.ok) continue;
            const source = await response.text();
            if (source.includes('export const publications')) {
                return source;
            }
        } catch (_error) {
            // Try next location.
        }
    }

    throw new Error('Unable to load publications.ts from known locations.');
}

function parsePublicationsFromTs(source) {
    const match = source.match(/export\s+const\s+publications(?:\s*:\s*Publication\[\])?\s*=\s*(\[[\s\S]*?\]);/);
    if (!match?.[1]) return [];

    try {
        return JSON.parse(match[1]);
    } catch (error) {
        console.error('Failed to parse publications.ts content:', error);
        return [];
    }
}

function getLatestPublications(publications, limit = 4) {
    if (!Array.isArray(publications)) return [];

    return publications
        .map((publication, index) => ({ publication, index }))
        .sort((a, b) => {
            const yearA = Number.parseInt(a.publication?.year, 10);
            const yearB = Number.parseInt(b.publication?.year, 10);
            const normalizedYearA = Number.isFinite(yearA) ? yearA : -Infinity;
            const normalizedYearB = Number.isFinite(yearB) ? yearB : -Infinity;

            if (normalizedYearA !== normalizedYearB) {
                return normalizedYearB - normalizedYearA;
            }

            return a.index - b.index;
        })
        .slice(0, limit)
        .map((entry) => entry.publication);
}

function renderRecentWorks(container, publications) {
    if (!publications.length) {
        container.innerHTML = `
            <article class="recent-work-card recent-work-card--loading">
                <p>No publications found. Run sync-publications.mjs to populate this section.</p>
            </article>
        `;
        return;
    }

    const memberSurnames = getTeamMemberSurnames();
    container.innerHTML = publications
        .map((publication) => {
            const safeTitle = escapeHtml(publication.title || 'Untitled publication');
            const safeJournal = escapeHtml(publication.journal || 'Journal unavailable');
            const safeSummary = escapeHtml(publication.summary || 'Abstract unavailable.');
            const safeYear = escapeHtml(publication.year || '');
            const safeLink = publication.scholarUrl || '#';
            const authors = highlightMemberAuthors(publication.citation || '', memberSurnames);

            return `
                <article class="recent-work-card">
                    <p class="recent-work-year">${safeYear}</p>
                    <h4 class="recent-work-title">${safeTitle}</h4>
                    <p class="recent-work-journal">${safeJournal}</p>
                    <p class="recent-work-authors">${authors}</p>
                    <p class="recent-work-abstract">${safeSummary}</p>
                    <a class="recent-work-link" href="${safeLink}" target="_blank" rel="noopener noreferrer">
                        View on Google Scholar
                    </a>
                </article>
            `;
        })
        .join('');
}

function getTeamMemberSurnames() {
    const memberHeadings = document.querySelectorAll('.team-card .team-info h3, .team-directory-title');
    const names = Array.from(memberHeadings)
        .map((element) => element.textContent.trim())
        .filter(Boolean);

    const surnames = names
        .map((name) => {
            const tokens = name
                .replace(/^Dr\s+/i, '')
                .replace(/^A\/Prof\s+/i, '')
                .split(/\s+/);
            return tokens[tokens.length - 1];
        })
        .filter(Boolean);

    return new Set(surnames.map((surname) => surname.toLowerCase()));
}

function highlightMemberAuthors(citation, memberSurnames) {
    const authors = citation
        .split(',')
        .map((author) => author.trim())
        .filter(Boolean);

    if (!authors.length) {
        return 'Authors unavailable';
    }

    return authors
        .map((author) => {
            const escapedAuthor = escapeHtml(author);
            const surname = author.split(/\s+/).pop()?.toLowerCase();
            if (surname && memberSurnames.has(surname)) {
                return `<strong>${escapedAuthor}</strong>`;
            }
            return escapedAuthor;
        })
        .join(', ');
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
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

