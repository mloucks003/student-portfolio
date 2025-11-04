/* ========================================
   PORTFOLIO JAVASCRIPT
   
   This file handles:
   - Loading data from config.js
   - Interactive elements (navigation, animations)
   - Matrix rain background effect
   ======================================== */

// ===== LOAD PORTFOLIO DATA FROM CONFIG =====
function loadPortfolioData() {
    // Hero Section
    document.getElementById('heroName').textContent = portfolioConfig.hero.name;
    document.getElementById('heroRole').textContent = portfolioConfig.hero.role;
    document.getElementById('heroTagline').textContent = portfolioConfig.hero.tagline;

    // About Section
    document.getElementById('aboutText1').textContent = portfolioConfig.about.paragraph1;
    document.getElementById('aboutText2').textContent = portfolioConfig.about.paragraph2;
    document.getElementById('statYears').textContent = portfolioConfig.about.stats.years;
    document.getElementById('statProjects').textContent = portfolioConfig.about.stats.projects;
    document.getElementById('statCerts').textContent = portfolioConfig.about.stats.certifications;

    // Skills Section
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = '';
    portfolioConfig.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in';
        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Projects Section
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';
    portfolioConfig.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.innerHTML = `
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener">View Project →</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Contact Section
    document.getElementById('contactEmail').textContent = portfolioConfig.contact.email;
    document.getElementById('contactLocation').textContent = portfolioConfig.contact.location;
    document.getElementById('contactGithub').textContent = portfolioConfig.contact.github;
    document.getElementById('contactGithubLink').href = portfolioConfig.contact.githubLink;
    document.getElementById('contactLinkedin').textContent = portfolioConfig.contact.linkedin;
    document.getElementById('contactLinkedinLink').href = portfolioConfig.contact.linkedinLink;

    // Footer
    document.getElementById('footerName').textContent = portfolioConfig.footer.name;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// ===== MOBILE NAVIGATION TOGGLE =====
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== MATRIX RAIN EFFECT =====
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to display
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to track drop position for each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    // Draw the matrix rain
    function draw() {
        // Fade effect
        ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set text style
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop to top after it reaches bottom
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    // Animation loop
    setInterval(draw, 50);

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-item, .stat-card');
    cards.forEach(card => observer.observe(card));
}

// ===== INITIALIZE EVERYTHING WHEN PAGE LOADS =====
window.addEventListener('DOMContentLoaded', () => {
    loadPortfolioData();
    setupMobileNav();
    setupSmoothScroll();
    initMatrixRain();
    setupScrollAnimations();
    
    console.log('%c🔒 Portfolio Loaded Successfully!', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    console.log('%cCustomize your portfolio by editing js/config.js', 'color: #00d9ff; font-size: 12px;');
});