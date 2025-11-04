# 🔒 Cybersecurity Portfolio - Student Edition

Welcome to your customizable cybersecurity portfolio! This project is designed to help you learn web development basics while creating a professional portfolio to showcase your skills.

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Quick Start Guide](#quick-start-guide)
4. [Customization Tutorial](#customization-tutorial)
5. [Understanding the Code](#understanding-the-code)
6. [Hosting on AWS S3](#hosting-on-aws-s3)
7. [Troubleshooting](#troubleshooting)
8. [Advanced Customization](#advanced-customization)

---

## 🎯 Project Overview

This is a **static website portfolio** built with:
- **HTML** - Structure and content
- **CSS** - Styling and visual design
- **JavaScript** - Interactivity and dynamic content

**Key Features:**
- ✅ Fully responsive (works on mobile, tablet, desktop)
- ✅ Dark cybersecurity theme with matrix rain effect
- ✅ Easy to customize through a single config file
- ✅ No backend required - pure static files
- ✅ Ready to host on AWS S3, GitHub Pages, or any web server

---

## 📁 File Structure

```
portfolio/
│
├── index.html              # Main HTML file - page structure
├── css/
│   └── styles.css         # All styling - colors, fonts, layout
├── js/
│   ├── config.js          # ⭐ EDIT THIS - Your portfolio data
│   └── script.js          # Interactive features - animations, etc.
└── README.md              # This file - complete documentation
```

### What Each File Does:

**index.html**
- Defines the structure of your portfolio
- Contains sections: Navigation, Hero, About, Skills, Projects, Contact, Footer
- Uses placeholders that get filled from config.js

**css/styles.css**
- Controls how everything looks (colors, fonts, spacing)
- Organized with comments for easy understanding
- CSS variables at the top for quick color changes

**js/config.js** ⭐ **THIS IS WHERE YOU MAKE CHANGES**
- Contains all your personal information
- No need to touch HTML or CSS to update content
- Simple JavaScript object with your data

**js/script.js**
- Loads data from config.js into the HTML
- Handles mobile menu, smooth scrolling
- Creates the matrix rain background effect

---

## 🚀 Quick Start Guide

### Step 1: Download the Portfolio
1. Download all files and maintain the folder structure
2. Keep files organized exactly as shown above

### Step 2: Open in a Browser
1. Navigate to the portfolio folder
2. Double-click `index.html`
3. Your portfolio will open in your default browser!

### Step 3: Make It Your Own
1. Open `js/config.js` in any text editor (Notepad, VS Code, Sublime, etc.)
2. Change the example information to your own
3. Save the file
4. Refresh your browser to see changes!

---

## ✏️ Customization Tutorial

### 🎨 The Easy Way: Editing config.js

This is the **ONLY** file you need to edit to customize your portfolio!

#### 1. Change Your Name and Title

Find this section in `config.js`:
```javascript
hero: {
    name: "John Doe",                    // ← Change this
    role: "Cybersecurity Analyst",       // ← Change this
    tagline: "Protecting digital assets, one vulnerability at a time"  // ← Change this
}
```

**Example:**
```javascript
hero: {
    name: "Sarah Johnson",
    role: "Junior Security Researcher",
    tagline: "Learning to secure the digital world"
}
```

#### 2. Update Your About Section

Find this section:
```javascript
about: {
    paragraph1: "I am a passionate...",  // ← Write about yourself
    paragraph2: "With hands-on...",      // ← More about you
    stats: {
        years: "3+",        // ← Your years of experience/study
        projects: "15+",    // ← Number of projects
        certifications: "5+"  // ← Number of certs
    }
}
```

**Example:**
```javascript
about: {
    paragraph1: "I am a cybersecurity student passionate about ethical hacking and network security. Currently pursuing my degree while completing online certifications and CTF challenges.",
    paragraph2: "I enjoy learning new tools and techniques, participating in bug bounty programs, and staying current with the latest security vulnerabilities.",
    stats: {
        years: "1+",
        projects: "8+",
        certifications: "2+"
    }
}
```

#### 3. Customize Your Skills

The skills section is an **array** (list) of skill objects:
```javascript
skills: [
    {
        icon: "🔒",                    // ← Any emoji
        name: "Penetration Testing",   // ← Skill name
        description: "Proficient in..."  // ← What you know
    },
    // Add more skills here
]
```

**How to Add a New Skill:**
```javascript
{
    icon: "🐍",
    name: "Python Programming",
    description: "Building security tools and automation scripts with Python."
}
```

**How to Remove a Skill:**
- Simply delete the entire skill object (including the curly braces)
- Make sure to keep proper comma placement

**Finding Emojis:**
- Windows: `Win + .` (period)
- Mac: `Cmd + Control + Space`
- Or copy from: https://emojipedia.org/

#### 4. Add Your Projects

This works the same way as skills:
```javascript
projects: [
    {
        title: "Network Vulnerability Scanner",     // ← Project name
        description: "Developed a Python-based...", // ← What it does
        tags: ["Python", "Network Security"],       // ← Technologies used
        link: "#"  // ← Link to project or GitHub repo
    }
]
```

**Example of Adding a Real Project:**
```javascript
{
    title: "Password Manager",
    description: "Built a secure password manager using AES-256 encryption with a master password and secure storage.",
    tags: ["Python", "Cryptography", "SQLite"],
    link: "https://github.com/yourusername/password-manager"
}
```

**To add more projects:**
- Copy an existing project block
- Paste it after the last project
- Add a comma between projects
- Update with your information

#### 5. Update Contact Information

```javascript
contact: {
    email: "john.doe@email.com",              // ← Your email
    location: "City, Country",                // ← Your location
    github: "github.com/johndoe",             // ← Display text
    githubLink: "https://github.com/johndoe", // ← Actual link
    linkedin: "linkedin.com/in/johndoe",      // ← Display text
    linkedinLink: "https://linkedin.com/in/johndoe"  // ← Actual link
}
```

**Important:** Make sure both the display text AND the link are updated!

---

## 🧠 Understanding the Code

### HTML Basics (index.html)

HTML uses **tags** to structure content:
```html
<section id="about" class="section">
    <h2>About Me</h2>
    <p>This is a paragraph</p>
</section>
```

- `<section>` - A section of content
- `id="about"` - Unique identifier
- `class="section"` - Styling group
- `<h2>` - Heading level 2
- `<p>` - Paragraph

**How the Dynamic Content Works:**
```html
<h1 id="heroName">John Doe</h1>
```

JavaScript finds this element by `id` and replaces "John Doe" with your name from config.js:
```javascript
document.getElementById('heroName').textContent = portfolioConfig.hero.name;
```

### CSS Basics (styles.css)

CSS controls how things look:
```css
.hero-title {
    font-size: 4rem;       /* Size of text */
    color: #ffffff;        /* Text color (white) */
    margin-bottom: 20px;   /* Space below */
}
```

**CSS Variables (Easy Color Changes):**

At the top of styles.css, you'll find:
```css
:root {
    --primary-bg: #0a0e17;      /* Main background color */
    --accent-green: #00ff41;    /* Green accent color */
    --text-primary: #ffffff;    /* Main text color */
}
```

**To change the color scheme:**
1. Find the color codes you want (use: https://htmlcolorcodes.com/)
2. Replace the values in `:root`
3. Save and refresh!

**Example - Blue Theme:**
```css
:root {
    --primary-bg: #0a1628;
    --accent-green: #00d9ff;  /* Changed to cyan */
    --text-primary: #ffffff;
}
```

### JavaScript Basics (script.js)

JavaScript makes the page interactive:

**1. Loading Data:**
```javascript
function loadPortfolioData() {
    // Gets the name from config and puts it in HTML
    document.getElementById('heroName').textContent = portfolioConfig.hero.name;
}
```

**2. Mobile Menu:**
```javascript
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');  // Show/hide menu
});
```

**3. Matrix Rain Effect:**
The `initMatrixRain()` function creates the falling text effect using HTML5 Canvas:
- Creates a canvas element
- Draws random characters
- Animates them falling down
- Creates the "matrix" look

---

## ☁️ Hosting on AWS S3

### What You Need:
- AWS Account (free tier available)
- Your portfolio files

### Step-by-Step Process:

#### 1. Create an S3 Bucket
```bash
1. Log into AWS Console
2. Go to S3 service
3. Click "Create bucket"
4. Choose a unique name (e.g., "yourname-portfolio")
5. Choose your region
6. Uncheck "Block all public access"
7. Acknowledge the warning
8. Click "Create bucket"
```

#### 2. Upload Your Files
```bash
1. Click on your bucket name
2. Click "Upload"
3. Drag and drop ALL your portfolio files:
   - index.html
   - css/ folder with styles.css
   - js/ folder with both .js files
4. Click "Upload"
```

#### 3. Enable Static Website Hosting
```bash
1. Click on your bucket
2. Go to "Properties" tab
3. Scroll to "Static website hosting"
4. Click "Edit"
5. Enable static website hosting
6. Index document: index.html
7. Save changes
```

#### 4. Set Bucket Policy (Make it Public)
```bash
1. Go to "Permissions" tab
2. Scroll to "Bucket policy"
3. Click "Edit"
4. Paste this policy (replace YOUR-BUCKET-NAME):
```

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

#### 5. Access Your Website
```bash
1. Go back to "Properties" tab
2. Scroll to "Static website hosting"
3. You'll see a URL like: http://your-bucket-name.s3-website-region.amazonaws.com
4. Click it to view your live portfolio!
```

### Updating Your Portfolio:
1. Make changes locally
2. Go to S3 bucket
3. Upload the changed files (it will overwrite)
4. Clear browser cache and refresh!

---

## 🔧 Troubleshooting

### Problem: Website looks broken or unstyled

**Cause:** CSS file not loading
**Solution:**
1. Check file structure - css/styles.css must be in correct folder
2. Check the path in index.html: `<link rel="stylesheet" href="css/styles.css">`
3. Make sure folder name is exactly `css` (lowercase)

### Problem: No content showing / still showing "John Doe"

**Cause:** JavaScript not loading or config.js has errors
**Solution:**
1. Open browser console (F12 or Right-click → Inspect → Console)
2. Look for red error messages
3. Common errors:
   - Missing comma between objects
   - Mismatched quotes
   - Missing closing bracket
4. Check config.js syntax carefully

### Problem: Matrix effect not working

**Cause:** JavaScript error or canvas not supported
**Solution:**
1. Check console for errors
2. Make sure script.js is loading
3. Try a different browser

### Problem: Mobile menu not working

**Cause:** JavaScript not loaded
**Solution:**
1. Check that both js files are present
2. Check console for errors
3. Verify script tags at bottom of index.html

### Problem: Changes not showing

**Cause:** Browser cache
**Solution:**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Try incognito/private window

---

## 🎨 Advanced Customization

### Changing Colors

Edit the `:root` section in `css/styles.css`:

```css
:root {
    /* Try these color schemes: */
    
    /* Original Cybersecurity Green */
    --accent-green: #00ff41;
    --accent-cyan: #00d9ff;
    
    /* Purple Hacker Theme */
    --accent-green: #bd00ff;
    --accent-cyan: #ff00ff;
    
    /* Red Security Alert */
    --accent-green: #ff0040;
    --accent-cyan: #ff6b6b;
    
    /* Blue Professional */
    --accent-green: #0066ff;
    --accent-cyan: #00ccff;
}
```

### Changing Fonts

Add Google Fonts to `index.html` (in `<head>` section):
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
```

Then in `styles.css`:
```css
:root {
    --font-main: 'Roboto Mono', monospace;
}
```

### Adding More Sections

1. Add HTML in index.html:
```html
<section id="certifications" class="section">
    <div class="container">
        <h2 class="section-title">Certifications</h2>
        <div id="certsContainer"></div>
    </div>
</section>
```

2. Add data in config.js:
```javascript
certifications: [
    { name: "CompTIA Security+", year: "2024" },
    { name: "CEH", year: "2024" }
]
```

3. Add loader in script.js:
```javascript
const certsContainer = document.getElementById('certsContainer');
portfolioConfig.certifications.forEach(cert => {
    certsContainer.innerHTML += `<p>${cert.name} - ${cert.year}</p>`;
});
```

### Removing the Matrix Effect

If you want a cleaner look without the matrix rain:

In `styles.css`, hide the canvas:
```css
#matrix-canvas {
    display: none;
}
```

Or remove these lines from `script.js`:
```javascript
initMatrixRain();  // Delete or comment out this line
```

---

## 📚 Learning Resources

Want to learn more? Check out:

**HTML & CSS:**
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn)
- [freeCodeCamp](https://www.freecodecamp.org/)

**JavaScript:**
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

**Cybersecurity:**
- [TryHackMe](https://tryhackme.com/)
- [HackTheBox](https://www.hackthebox.eu/)

---

## 🎓 Assignment Ideas for Instructors

1. **Personalization Challenge**: Students customize all content with their own information
2. **Color Theme Project**: Change the color scheme to create a unique look
3. **New Skill Addition**: Add 3 new skills with appropriate emojis and descriptions
4. **Project Showcase**: Add real projects students have completed in class
5. **Advanced**: Add a new section (like certifications or blog posts)
6. **Deployment**: Host on AWS S3 and share the public URL

---

## ❓ Getting Help

If you're stuck:
1. Check the Troubleshooting section
2. Use browser console (F12) to see errors
3. Ask your instructor
4. Search the error message online

---

## 📝 Code Comments Guide

Throughout the code, you'll see comments:

**HTML Comments:**
```html
<!-- This is a comment -->
```

**CSS Comments:**
```css
/* This is a comment */
```

**JavaScript Comments:**
```javascript
// This is a single-line comment

/* This is a
   multi-line comment */
```

Comments explain what the code does and are ignored by the browser.

---

## 🏆 Best Practices

1. **Always save your changes** before refreshing the browser
2. **Make small changes** and test frequently
3. **Use proper indentation** to keep code readable
4. **Keep backups** of your files before making major changes
5. **Test on mobile** - view your site on your phone
6. **Update content regularly** as you complete new projects

---

## 🎉 You're Ready!

You now have everything you need to:
- ✅ Customize your portfolio
- ✅ Understand how the code works
- ✅ Deploy to AWS S3
- ✅ Make it uniquely yours

**Remember:** The best way to learn is by doing. Don't be afraid to experiment and break things - you can always restore from backup!

Happy coding! 🚀🔒

---

**Questions about the code?** Add them as comments in your portfolio and discuss with your instructor!