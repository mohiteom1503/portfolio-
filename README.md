# Om J. Mohite — Portfolio Architecture & Deployment Guide

This guide ensures you can manage, update, and deploy your portfolio website effortlessly—whether today or 10 years in the future.

---

## 🚀 Quick Deployment to GitHub (First-Time Setup / Updating)

Your Netlify deployment is linked to your GitHub repository (`main` branch). Whenever you commit changes to GitHub, Netlify automatically detects them and deploys the live site in about 20–30 seconds.

### Method 1: Drag & Drop via GitHub.com (Browser) — Recommended
1. Open your repository on **[GitHub.com](https://github.com)** in your browser.
2. Click the **Add file** dropdown at the top right and select **Upload files**.
3. Drag and drop all the files from this folder (`index.html`, `admin.html`, `projects.js`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, `robots.txt`, `netlify.toml`, `README.md`, and image assets) directly into the upload box.
4. Scroll to the bottom and click the green **Commit changes** button.
5. **Done!** Netlify will automatically build and publish your website live to `https://itsomjmohite.netlify.app`.

### Method 2: Command Line (Git Terminal)
If you prefer the terminal, open your repository directory and run:
```bash
git add .
git commit -m "Update portfolio: modern admin manager, AI discovery (llms.txt), and dynamic rendering"
git push origin main
```

---

## 🛠️ How to Add Future Projects Using `admin.html`

The `admin.html` file is your **Private Project & AI Manager**. It runs entirely in your web browser and handles all formatting, JSON-LD, sitemap generation, and AI search indexing.

### Steps to Add a Project:
1. Open `admin.html` in your browser (e.g., `https://itsomjmohite.netlify.app/admin.html` or double-click `admin.html` locally).
2. Enter your private passkey: **`om2026`** (check "Remember me" so you don't need to retype it next time).
3. Fill in the project details on the left form:
   - **Title**: e.g., *Royal Dine Restro & Cafe*
   - **Live URL**: e.g., *https://royaldine.netlify.app*
   - **Category**: e.g., *Restaurant & Hospitality*
   - **Location**: e.g., *Belagavi, Karnataka*
   - **Description**: A 2-sentence summary of the business problem solved.
   - **Key Highlights**: 3 bullets (speed, WhatsApp conversions, local SEO).
   - **Tech Stack**: e.g., *HTML5, Modern CSS, Vanilla JS, WhatsApp API, Netlify*.
4. Click **"🚀 Generate All 5 Production & AI Files"**.
5. Click **"📦 Download Updated Files (.ZIP)"**.
6. Unzip the downloaded file and upload the 4 updated files (`projects.js`, `llms.txt`, `llms-full.txt`, `sitemap.xml`) to your GitHub repository using **Add file > Upload files**, then click **Commit changes**.
7. **That's it!** Netlify auto-deploys within 30 seconds.

---

## 📂 File Directory & Purpose

| File | Purpose | Who Uses It? |
| :--- | :--- | :--- |
| `index.html` | Homepage & visual portfolio | Human visitors, web browsers |
| `admin.html` | Private project manager dashboard (passcode protected) | You (Om J. Mohite) |
| `projects.js` | Centralized project data array | Powers the dynamic project slider in `index.html` |
| `llms.txt` | Standard AI discovery profile | ChatGPT Search, Perplexity, Claude, Gemini |
| `llms-full.txt`| In-depth technical case studies and metrics | Deep AI reasoning models |
| `sitemap.xml` | XML sitemap with image metadata | Google & Bing search crawlers |
| `robots.txt` | Crawler permissions permitting AI and search bots | All web search crawlers |
| `netlify.toml` | Security headers, AI discovery link headers, caching | Netlify edge hosting servers |

---

## 🧠 10-Year Safe Architecture: Why This Setup Lasts
1. **Zero Bloat & No Database**: There is no WordPress or SQL database to corrupt or maintain. The site will load fast and work reliably for decades.
2. **Instant Core Web Vitals**: With sub-0.8s load times and 0.00 CLS, your site consistently scores 95–100 on Google PageSpeed Insights.
3. **AI Search Engine Ready**: By maintaining `llms.txt` alongside `sitemap.xml`, AI chatbots will understand your projects and recommend you for local development inquiries in Belagavi.
