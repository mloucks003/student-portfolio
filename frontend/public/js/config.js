/* ========================================
   PORTFOLIO CONFIGURATION FILE
   
   This is where you customize your portfolio!
   Simply change the values below to update your portfolio.
   No need to touch HTML or CSS files.
   ======================================== */

const portfolioConfig = {
    // ===== HERO SECTION =====
    hero: {
        name: "John Doe",
        role: "Cybersecurity Analyst",
        tagline: "Protecting digital assets, one vulnerability at a time"
    },

    // ===== ABOUT SECTION =====
    about: {
        paragraph1: "I am a passionate cybersecurity professional with expertise in penetration testing, network security, and threat analysis. My mission is to help organizations identify and mitigate security vulnerabilities before malicious actors can exploit them.",
        paragraph2: "With hands-on experience in various security tools and frameworks, I stay updated with the latest security trends and continuously expand my knowledge through certifications and practical challenges.",
        stats: {
            years: "3+",
            projects: "15+",
            certifications: "5+"
        }
    },

    // ===== SKILLS SECTION =====
    // You can add, remove, or modify skills
    // Icons use emojis - you can change them to any emoji you like
    skills: [
        {
            icon: "🔒",
            name: "Penetration Testing",
            description: "Proficient in ethical hacking, vulnerability assessment, and security testing methodologies."
        },
        {
            icon: "🌐",
            name: "Network Security",
            description: "Expert in firewall configuration, IDS/IPS systems, and network traffic analysis."
        },
        {
            icon: "🛡️",
            name: "Threat Analysis",
            description: "Skilled in identifying, analyzing, and mitigating security threats and vulnerabilities."
        },
        {
            icon: "💻",
            name: "Python & Scripting",
            description: "Proficient in Python, Bash, and PowerShell for automation and security tooling."
        },
        {
            icon: "🔍",
            name: "Digital Forensics",
            description: "Experience in incident response, malware analysis, and forensic investigations."
        },
        {
            icon: "☁️",
            name: "Cloud Security",
            description: "Knowledge of AWS, Azure security best practices and cloud infrastructure protection."
        }
    ],

    // ===== PROJECTS SECTION =====
    // Add your own projects here
    // You can add as many projects as you want
    projects: [
        {
            title: "Network Vulnerability Scanner",
            description: "Developed a Python-based tool that scans networks for common vulnerabilities, generates detailed reports, and provides remediation recommendations.",
            tags: ["Python", "Network Security", "Nmap"],
            link: "#" // Replace with your project link or GitHub repo
        },
        {
            title: "Password Strength Analyzer",
            description: "Created a web application that analyzes password strength using entropy calculations and provides real-time feedback on password security.",
            tags: ["JavaScript", "HTML/CSS", "Security"],
            link: "#"
        },
        {
            title: "Phishing Detection System",
            description: "Built a machine learning model that identifies phishing emails with 95% accuracy using natural language processing and URL analysis.",
            tags: ["Python", "Machine Learning", "NLP"],
            link: "#"
        },
        {
            title: "Security Audit Framework",
            description: "Designed a comprehensive security audit framework for small businesses, including checklists, automated scripts, and compliance reports.",
            tags: ["Security Audit", "Bash", "Documentation"],
            link: "#"
        },
        {
            title: "CTF Challenges Platform",
            description: "Contributed to a Capture The Flag platform with custom challenges focused on web security, cryptography, and reverse engineering.",
            tags: ["CTF", "Web Security", "Docker"],
            link: "#"
        },
        {
            title: "Encrypted Chat Application",
            description: "Developed a secure chat application with end-to-end encryption using RSA and AES algorithms for private communications.",
            tags: ["Cryptography", "Python", "Networking"],
            link: "#"
        }
    ],

    // ===== CONTACT SECTION =====
    contact: {
        email: "john.doe@email.com",
        location: "City, Country",
        github: "github.com/johndoe",
        githubLink: "https://github.com/johndoe",
        linkedin: "linkedin.com/in/johndoe",
        linkedinLink: "https://linkedin.com/in/johndoe"
    },

    // ===== FOOTER =====
    footer: {
        name: "John Doe"
    }
};

// Don't modify below this line unless you know what you're doing!
// ======================================================================