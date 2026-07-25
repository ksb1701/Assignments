# Session 20 – Mini Project Deployment & Review: Movie Watchlist

This module demonstrates building, optimizing, and deploying a React application structured around **Firebase Firestore CRUD logic** and **React Code Splitting (`React.lazy`)**. The project was developed inside the `src/Session_20` directory using **Tailwind CSS v4** for lean, modern styling and deployed live via **Netlify Drop**.

---

## 🚀 Live Deployment

- **Live URL:** [https://bejewelled-dragon-7d743c.netlify.app/](https://bejewelled-dragon-7d743c.netlify.app/)
- **Deployment Method:** Manual build (`npx vite build`) and drag-and-drop deployment via Netlify Drop (no GitHub or git commits required).

---

## 🎯 Objectives & Completed Tasks

### 1. Movie Watchlist & Firebase Backend (`MovieWatchlist.tsx`)
- **Objective:** Build a simple Movie Watchlist app connected to Firebase Firestore with CRUD capabilities.
- **Implementation:**
  - Implemented data operations using Firestore SDKs (`collection`, `addDoc`, `getDocs`, `updateDoc`, `deleteDoc`).
  - Styled cleanly and minimally with Tailwind CSS v4, supporting movie addition, inline editing, deletion, and watch-status toggling.

### 2. Cross-Device Testing & Debugging
- **Objective:** Verify functionality across desktop and mobile browsers.
- **Implementation:**
  - Tested adding, editing, and deleting movies in Incognito/Private mode across devices.
  - Verified that Firestore data synchronizes smoothly without caching or authentication conflicts.

### 3. Chrome DevTools Performance Analysis
- **Objective:** Measure initial load time and check for oversized JavaScript bundles (>200KB).
- **Implementation:**
  - Analyzed the Network tab in Chrome DevTools after production build and live deployment.
  - Verified that the main application bundle (`index-*.js`) is lightweight at **~192 KB** (well below the 200KB limit).

### 4. Performance Optimization (`Session20App.tsx`)
- **Objective:** Enable code splitting with `React.lazy()` for the main Watchlist component.
- **Implementation:**
  - Wrapped `MovieWatchlist` with `React.lazy()` and `<Suspense>` in `Session20App.tsx`.
  - Successfully separated the heavy Firebase Firestore SDKs (~561 KB) into a dedicated chunk that is loaded dynamically only when the component renders.

### 5. Project Documentation (`README.md`)
- **Objective:** Document the project features, technology stack, and deployment results.
- **Implementation:**
  - Created this clean, modular documentation referencing the live Netlify link and build metrics.

---

## 📁 File Structure

```text
src/Session_20/
│
├── firebase.ts          # Firebase SDK initialization and Firestore db export
├── MovieWatchlist.tsx   # Core CRUD component for movie watchlist
├── Session20App.tsx     # Main wrapper with React.lazy code splitting and Suspense
└── README.md            # Session documentation and live link
```

---

## 💻 How to Run Locally

1. Ensure your environment variables for Firebase are set in a `.env` file at the root.
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
3. Open your browser to `http://localhost:5173` and interact with your watchlist!
