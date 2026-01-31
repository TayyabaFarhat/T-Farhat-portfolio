# Tayyaba Farhat - Professional Portfolio

This is a modern, responsive portfolio website for **Tayyaba Farhat**, a Ph.D. Scholar and Incubation Manager, built with **React**, **Vite**, and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository (if you haven't already):
    ```bash
    git clone https://github.com/TayyabaFarhat/tayyaba-portfolio.git
    cd tayyaba-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
```

The application will typically run at `http://localhost:5173`.

---

## 🌐 How to Deploy to GitHub Pages

Follow these steps to make your portfolio live on GitHub Pages.

### 1. Create a GitHub Repository
If you haven't already, create a new public repository on GitHub (e.g., `tayyaba-portfolio`).

### 2. Connect Your Local Project
Run these commands in your project terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TayyabaFarhat/tayyaba-portfolio.git
git push -u origin main
```

### 3. Install `gh-pages`
We will use a package to handle the deployment automatically.

```bash
npm install gh-pages --save-dev
```

### 4. Update `vite.config.js`
Open `vite.config.js` and add the `base` property with your repository name.

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// ... other imports

export default defineConfig({
  plugins: [react(), ...],
  base: "/tayyaba-portfolio/", // <--- ADD THIS LINE (e.g., "/tayyaba-portfolio/")
  resolve: {
    // ...
  },
});
```

### 5. Update `package.json`
Open `package.json` and add these two items:

1.  **Add `homepage`** at the top level:
    ```json
    "homepage": "https://TayyabaFarhat.github.io/tayyaba-portfolio",
    ```

2.  **Add `predeploy` and `deploy` scripts** under `"scripts"`:
    ```json
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      // ...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

### 6. Deploy!
Now, simply run:

```bash
npm run deploy
```

This command will build your project and push existing files to a `gh-pages` branch on your GitHub repository.

### 7. Configure GitHub
1.  Go to your repository on GitHub.
2.  Click on **Settings** > **Pages** (on the left sidebar).
3.  Ensure the **Source** is set to `Deploy from a branch`.
4.  Ensure the **Branch** is set to `gh-pages` / `/root`.
5.  Your site should be live in a few minutes!

---

## 🛠️ Built With

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Framer Motion](https://www.framer.com/motion/)
*   [Lucide React](https://lucide.dev/)
