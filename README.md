# Akeah Diez | Enchanted IT Portfolio

A responsive personal portfolio for Akeah Diez, a BSIT student and aspiring IT professional. It uses an original fairytale-inspired visual system: royal purple night skies, golden lanterns, a tower silhouette, moonlight, vines, stars, and soft floral accents.

## Technologies used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Cormorant Garamond and DM Sans)

There are no frameworks, build tools, or packages. The site works by opening `index.html`.

## Features

- Responsive layout for desktop, tablet, and mobile
- Sticky glass-like navigation with a mobile menu
- Animated lanterns, stars, and gentle reveal effects
- Accessible semantic HTML and descriptive labels
- Skills cards and project cards
- Project filtering by category
- Resume view and download links
- Contact placeholders ready to edit
- CSS fallback artwork, so the site still looks good without images
- Reduced-motion support

## Folder structure

```text
akeah-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── README.md
    │   ├── rapunzel.png       (add your permitted artwork here)
    │   ├── tower.png          (add your permitted artwork here)
    │   └── lanterns.png       (add your permitted artwork here)
    ├── icons/
    │   └── README.md
    └── Akeah_Diez_Resume.pdf  (add your real resume here)
```

## Run locally

1. Open this folder in VS Code.
2. Double-click `index.html` in File Explorer, or right-click it in VS Code and choose **Reveal in File Explorer**.
3. Open the file in your browser. You can also install the free **Live Server** extension in VS Code and choose **Open with Live Server** for automatic refreshes.
4. Google Fonts load when you have an internet connection. The site uses fallback fonts if they cannot load.

## Personalize the portfolio

### Change your name and information

Open `index.html` and search for the text you want to change. Your name appears in the navigation, hero, and footer. The About, Education, OJT, and Contact sections are also regular HTML text, so you can edit them directly.

### Add your profile or fairytale images

Only add images that you created or have permission to use. Put them inside `assets/images/` with these names:

- `rapunzel.png`
- `tower.png`
- `lanterns.png`

The hero is already prepared for `rapunzel.png`. The CSS illustration remains visible when the file is missing. You can add the other images later by placing an `<img>` element in the section where you want it and using a path like `assets/images/tower.png`.

### Add your resume

Place your actual PDF in `assets/` and name it exactly `Akeah_Diez_Resume.pdf`. Both resume buttons already point to that path. The comments next to the buttons mark the edit area.

### Change project details and links

Each project is an `<article>` in the Projects section of `index.html`. Edit its name, type, description, role, technologies, and links. Search for `Replace both placeholder URLs` to find the three link areas. Replace the placeholder GitHub URL and the `#contact` Live Demo URL with your real URLs.

### Add contact links

In the Contact section, replace `your.email@example.com`, `github.com/yourusername`, and `linkedin.com/in/yourusername` with your own details. Update both the visible text and the `href` value. For email, keep the `mailto:` prefix.

## Beginner Git and GitHub guide

### 1. Create a GitHub repository

1. Sign in at [github.com](https://github.com/).
2. Click the **+** button, then **New repository**.
3. Name it something like `akeah-portfolio`.
4. Choose **Public** if you want GitHub Pages to show it publicly.
5. Do not add another README when GitHub asks, because this folder already has one.
6. Click **Create repository**.

### 2. Connect this folder to GitHub

Open the VS Code terminal with **Terminal > New Terminal**. Run these commands one at a time:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/akeah-portfolio.git
git push -u origin main
```

What each command does:

- `git init` starts Git tracking in this folder by creating a hidden `.git` folder.
- `git add .` stages every new and changed file for the next save point. The dot means “this folder.”
- `git commit -m "Initial portfolio"` saves the staged files into Git history with a message.
- `git branch -M main` names the current branch `main`, which is the common default branch name.
- `git remote add origin ...` gives your local folder the web address of your GitHub repository. Replace the example URL with your own.
- `git push -u origin main` uploads your local `main` branch to GitHub and remembers that destination for future pushes.

GitHub may ask you to sign in. Follow the sign-in window or browser prompt. Never put a password or access token inside this README.

### 3. Update the website later

After changing files, use:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

This stages your edits, records them, and uploads them. The next GitHub Pages build will use the latest version.

### 4. Turn on GitHub Pages

1. Open your repository on GitHub.
2. Click **Settings**.
3. In the left menu, click **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/ (root)**.
6. Click **Save**.
7. Wait a few minutes and refresh the Pages screen. GitHub will show your portfolio URL, usually:
   `https://YOUR-USERNAME.github.io/akeah-portfolio/`

Your repository name and GitHub username determine the final URL.

## Before publishing checklist

- Replace the email, GitHub, and LinkedIn placeholders.
- Replace project GitHub and Live Demo links.
- Add your permitted images to `assets/images/`.
- Add `assets/Akeah_Diez_Resume.pdf`.
- Open the page on a phone-sized browser window and test the menu.
- Test every button and link after replacing its placeholder.
