# Portfolio Submission Guide

This guide walks you through submitting your portfolio website to GitHub and preparing it for the Skills Showcase Challenge.

## ✅ Pre-Submission Checklist

Before submitting, verify:
- [x] All required sections are present (Home, Projects, Contact)
- [x] Contact form works and shows success alert
- [x] Website is responsive (mobile, tablet, desktop)
- [x] Navigation is smooth and functional
- [x] README.md is complete and detailed
- [x] All project links are updated with your GitHub URLs
- [x] Profile image is in place
- [x] Resume PDF is ready

## 📋 Files Included

```
diez-portfolio/
├── index.html                    # Main website
├── style.css                     # Styling  
├── script.js                     # JavaScript functionality
├── README.md                     # Project documentation
├── SUBMISSION_GUIDE.md           # This file
├── editorial-v2.css              # Alternative stylesheet
├── editorial.css                 # Alternative stylesheet
└── assets/
    ├── images/
    │   ├── profile.jpg           # Your profile picture
    │   └── rapunzel.png          # Optional decorative art
    └── Akeah_Diez_Resume.pdf     # Your resume
```

## 🚀 Step-by-Step GitHub Submission

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in to your account (or create one if needed)
3. Click the **+** icon in the top right → **New repository**
4. Repository name: `diez-portfolio` or similar
5. Description: "Personal Portfolio Website - Web Development Intern Challenge"
6. Make sure it's set to **Public** (required for the challenge)
7. Click **Create repository**

### Step 2: Upload Files to GitHub

#### Option A: Using GitHub Web Interface (Easiest for beginners)

1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop all the project files into the upload area (or click to browse)
3. Make sure to include:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `assets/` folder with all images
4. Add a commit message: "Initial portfolio commit"
5. Click **Commit changes**

#### Option B: Using Git Command Line (More professional)

1. Open PowerShell/Terminal and navigate to your project:
   ```powershell
   cd "c:\Users\Akeah\OneDrive\Desktop\diez portfolio"
   ```

2. Initialize git (if not already done):
   ```powershell
   git init
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

3. Add all files:
   ```powershell
   git add .
   ```

4. Commit the files:
   ```powershell
   git commit -m "Initial commit: Personal portfolio website"
   ```

5. Add the remote repository (replace with your GitHub URL):
   ```powershell
   git remote add origin https://github.com/yourusername/diez-portfolio.git
   ```

6. Push to GitHub:
   ```powershell
   git branch -M main
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages (Optional but Recommended)

To host your portfolio for free on GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**
7. Your site will be live at: `https://yourusername.github.io/diez-portfolio`

Your portfolio is now accessible via the web!

### Step 4: Verify Your Submission

1. ✅ Check that all files are uploaded to GitHub
2. ✅ Visit your GitHub repository URL
3. ✅ Click on each file to verify it's there
4. ✅ Test the GitHub Pages link (if enabled)
5. ✅ Verify the README.md displays correctly on GitHub

## 📥 Preparing for Google Drive Submission

The challenge also requires a ZIP file submission to Google Drive:

### Step 1: Create a ZIP File

1. Open File Explorer
2. Navigate to `c:\Users\Akeah\OneDrive\Desktop\`
3. Right-click the **diez portfolio** folder
4. Select **Send to** → **Compressed (zipped) folder**
5. This creates a ZIP file named `diez portfolio.zip`

### Step 2: Upload to Google Drive

1. Go to [Google Drive](https://drive.google.com)
2. Click **+ New** → **File upload**
3. Select your `diez portfolio.zip` file
4. Upload completes (may take a minute depending on file size)
5. Copy the shareable link (right-click → Share → Copy link)

### Step 3: Submission Form

1. Go to the **Skill Showcase Challenge | Submission Form** (provided in challenge instructions)
2. Fill in the following:
   - **Name:** Akeah Jailyn Diez
   - **Email:** Your email
   - **GitHub Repository:** `https://github.com/yourusername/diez-portfolio`
   - **Google Drive Link:** [Paste your shared ZIP link here]
   - **Portfolio/Live Link:** `https://yourusername.github.io/diez-portfolio` (if using GitHub Pages)
   - **Technologies Used:** HTML5, CSS3, JavaScript
   - **Project Description:** [Include the overview from README]
3. Submit the form

## 📱 Testing Before Submission

### Desktop Testing
1. Open `index.html` in your browser
2. Test all navigation links
3. Fill out contact form and verify success alert
4. Test project filtering
5. Test dark mode toggle
6. Check all links work correctly

### Mobile Testing
1. Open the website on a smartphone
2. Verify layout is responsive
3. Test mobile menu (hamburger)
4. Verify form is usable on mobile
5. Check all text is readable

### Cross-Browser Testing
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile Safari (iPhone) ✅
- Chrome Mobile (Android) ✅

## 🔧 Final Adjustments Before Submission

### Update Personal Information
Make sure these are customized:
- [ ] Profile picture is your actual photo (`assets/images/profile.jpg`)
- [ ] Name and bio match your actual information
- [ ] Email is correct and working
- [ ] GitHub profile URL is your actual GitHub
- [ ] LinkedIn URL is correct
- [ ] Resume PDF is your actual resume
- [ ] Project descriptions are accurate
- [ ] Tech stacks listed for projects are correct

### Verify Links
- [ ] GitHub profile link works
- [ ] Email link opens mail client
- [ ] LinkedIn link works
- [ ] Project GitHub links (if applicable)
- [ ] Resume PDF opens and displays correctly

### Quality Checks
- [ ] No spelling or grammar errors
- [ ] No broken images
- [ ] No console errors (open DevTools F12 → Console)
- [ ] Form submits successfully
- [ ] All animations work smoothly
- [ ] Dark mode toggle works and persists

## 📧 Contact Support

If you encounter any issues:

1. **GitHub Issues:** Visit your repository's Issues tab
2. **Challenge Contact:** Email the Skills Showcase Challenge organizers
3. **Troubleshooting:**
   - If GitHub Pages isn't working: Check Settings → Pages
   - If form isn't submitting: Check browser console for errors
   - If images aren't showing: Verify file paths are relative

## 🎉 Submission Complete!

Once you've submitted:
1. You should receive a confirmation email
2. Keep your GitHub repository public
3. Continue to update and improve your portfolio
4. Share the link with potential employers and colleagues

---

**Good luck with your submission! 🚀**

For more information, refer to the main [README.md](README.md)
