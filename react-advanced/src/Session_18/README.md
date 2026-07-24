# Session 18: Environment Variables & Configuration

This session focuses on managing environment variables and keeping sensitive information (like API keys) secure in a Vite/React application.

## Tasks Completed

1. **Local Environment Variables**
   - Created a `.env.local` file to store sensitive variables securely on the local machine.
   - Added a dummy Spotify API key (`VITE_SPOTIFY_API_KEY`) and accessed it in the application using `import.meta.env.VITE_SPOTIFY_API_KEY`.

2. **Securing Firebase Credentials**
   - Ensured Firebase configuration uses environment variables (`VITE_FIREBASE_API_KEY`, etc.) instead of hardcoded strings in the source code.

3. **Conditional Environments (Dev vs. Prod)**
   - Created two separate environment files:
     - `.env.development`: Loaded automatically when running `npm run dev`.
     - `.env.production`: Loaded automatically during the build process (`npm run build`).
   - Added `VITE_WELCOME_MSG` to both files with different values to demonstrate how Vite loads the appropriate environment variables based on the current mode.

4. **Security and Git**
   - Verified that `.env` and `.env.*` files are included in `.gitignore`. This ensures that API keys and other secrets are never accidentally committed or pushed to version control.

5. **Secure Template File**
   - Created an `.env.template` file containing placeholder values for Firebase, Spotify, and Google Maps API keys.
   - This file *is* safe to commit to version control. It acts as documentation so other developers know which environment variables are required to run the project.

## Important Note on Vite
Because this project uses Vite rather than Create React App, environment variables must be prefixed with `VITE_` instead of `REACT_APP_`. Furthermore, they are accessed in the code via `import.meta.env.VITE_VAR_NAME` instead of `process.env`.
