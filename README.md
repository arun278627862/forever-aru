# Forever Aru ❤️ — Cinematic Romantic Website
### Dedicated from Arun to his beloved wife Pinki (lovingly called Aru)

> *"Aru, tum meri favourite person ho. ❤️"*  
> **Couple Identity:** Arun ❤️ Pinki  
> **First Meeting Date:** 4 February 2026  

---

## 🌟 About the Project

**Forever Aru** is a cinematic, romantic surprise website crafted as a deeply personal digital love letter and memory scrapbook. It features a password-protected romantic welcome screen, an interactive 3D unfolding love envelope with a handwritten letter, a live days-together counter tracking every second since their first meeting on 4 February 2026, a surprise love message generator, a Polaroid-style photo scrapbook with full-screen lightbox, and romantic ambient music with a built-in procedural synthesizer fallback.

Designed to be 100% static, fast, mobile-first, and completely free to host on **GitHub Pages**.

---

## 📂 Project Structure

```text
forever-aru/
├── index.html               # Main website structure & SEO markup
├── style.css                # Cinematic romantic styling & responsive animations
├── script.js                # Interactive logic, configuration & Web Audio synth
├── README.md                # Complete GitHub Pages deployment guide
└── assets/
    ├── photos/              # Romantic photos & memory images
    │   ├── cover.jpg
    │   ├── pinki-1.jpg
    │   ├── pinki-2.jpg
    │   ├── arun-pinki-1.jpg
    │   ├── arun-pinki-2.jpg
    │   ├── arun-pinki-3.jpg
    │   └── README.md        # Photo replacement guide
    └── music/
        └── README.md        # Music addition guide
```

---

## 🚀 How to Host for FREE on GitHub Pages (Step-by-Step)

Follow these simple steps to publish the website live on the internet so Pinki can open it on her phone from anywhere in the world!

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/). (If you don't have an account, create a free one).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Set the **Repository name** to:
   ```
   forever-aru
   ```
4. Choose **Public** (required for free GitHub Pages).
5. Leave "Add a README file" unchecked (we already have one).
6. Click **Create repository**.

### Step 2: Upload Project Files
1. On your new repository page, click **"uploading an existing file"** (or use Git from your command line).
2. Drag and drop all files from this `forever-aru` folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - The entire `assets/` folder (with `photos/` and `music/`)
3. At the bottom, type a commit message (e.g., `Initial romantic surprise website`) and click **Commit changes**.

### Step 3: Add Your Real Photos
- The website is already pre-loaded with high-definition artistic romantic demonstration pictures.
- To use your real photos with Pinki, simply replace the image files in `assets/photos/` with your own photos keeping the exact same filenames:
  - `cover.jpg` (Hero landscape memory)
  - `pinki-1.jpg` (Pinki's portrait with her radiant smile)
  - `pinki-2.jpg` (Pinki's candid outdoor portrait)
  - `arun-pinki-1.jpg` (Couple picture)
  - `arun-pinki-2.jpg` (Couple cafe date)
  - `arun-pinki-3.jpg` (Couple walking together)
- See [assets/photos/README.md](assets/photos/README.md) for detailed image tips.

### Step 4: Add an Optional Romantic Song
- Add your favorite romantic MP3 file as `assets/music/romantic.mp3`.
- *Note:* Even if you do not add an MP3, the website has a built-in romantic chime & piano arpeggio synthesizer that plays automatically when Pinki taps the music player!

### Step 5: Enable GitHub Pages
1. In your GitHub repository, click on the **Settings** tab (the gear icon near the top).
2. On the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` (or `master`) from the dropdown.
5. Keep the folder dropdown set to `/(root)`.
6. Click the **Save** button.

### Step 6: Wait for Deployment & Open Your Website
1. GitHub Pages will take about **1 to 3 minutes** to build and launch your site.
2. Refresh the **Settings → Pages** page.
3. You will see a banner at the top saying:
   > *"Your site is live at https://YOUR-USERNAME.github.io/forever-aru/"*
4. Click the link or send it to Pinki on WhatsApp! ❤️

---

## 🔒 Secret Password

When Pinki opens the website, she will be greeted with:
> *"Welcome, My Aru ❤️"*  
> *"Yeh chhoti si duniya sirf tumhare liye hai."*

She can unlock the surprise by typing any of the following:
- `aru`
- `pinki`
- `0402` (representing 4th February)
- `04022026`

*To change the password:* Open `script.js` and edit the `CONFIG.PASSWORD.accepted` array at the top of the file!

---

## ✏️ How to Customize Messages, Quotes & Dates

Everything is neatly organized in the `CONFIG` section at the top of `script.js`:
- **Change first meeting date:** Update `firstMeetingDateStr`.
- **Change love letter:** Edit the paragraphs in `CONFIG.LOVE_LETTER`.
- **Change surprise messages:** Edit the quotes in `CONFIG.SURPRISE_MESSAGES`.
- **Add more photos:** Add new objects to `CONFIG.GALLERY_PHOTOS`.

Whenever you edit files on GitHub or push new commits, GitHub Pages automatically updates the live website within 1–2 minutes!

---

## 📱 Mobile-First Features
- **No hover dependencies:** Works with gentle taps and swipes on iPhone and Android.
- **Touch-Friendly Lightbox:** Pinki can swipe left or right across photos.
- **Optimized for Battery & CPU:** Particle animations pause automatically when switching browser tabs.
- **Zero Broken Elements:** Image fallbacks and audio synthesizers guarantee smooth performance under any connection.

---

*Made with all my love, Arun.* ❤️
