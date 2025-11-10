This project expects a few files in `public/` for the splash and header UI.

Required files (place in `public/`):
- logo.png        — site logo used in the header
- jackets.gif     — splash GIF animation

Optional but recommended:
- jacket-countdown-poster.jpg — poster image used as fallback / poster for processing

Quick checks and dev server

To validate assets:

```powershell
cd C:\Users\katef\creative-babes
npm run validate-assets
```

To start the dev server (if PowerShell blocks npm scripts, use cmd.exe):

Command Prompt (recommended if you see PowerShell execution policy errors):

```cmd
cd C:\Users\katef\creative-babes
npm run dev
```

If you want to allow npm scripts in PowerShell (one-time, admin required):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# then run
cd C:\Users\katef\creative-babes
npm run dev
```

If you prefer pnpm:

```powershell
npm install -g pnpm
pnpm dev
```

If you rename any of the files in `public/`, update `app/config/assets.ts` to keep components in sync.
