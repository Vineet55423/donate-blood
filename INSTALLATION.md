# Installation Guide - FindBlood Platform

## 📦 What's Included in This ZIP

This package contains a complete, ready-to-run React blood donation platform with:
- ✅ All source code files
- ✅ Configuration files (Vite, TypeScript, Tailwind CSS)
- ✅ Package dependencies list
- ✅ Complete documentation

## 🖥️ System Requirements

- **Operating System**: Windows 10/11, macOS 10.15+, or Linux
- **Node.js**: Version 18.0 or higher
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: ~500MB for node_modules
- **Browser**: Chrome, Firefox, Safari, or Edge (latest version)

## 📝 Step-by-Step Installation

### 1️⃣ Install Node.js (if not already installed)

**Check if Node.js is installed:**
```bash
node --version
```

If you see a version number (v18.x.x or higher), skip to Step 2.

**If not installed:**
1. Go to https://nodejs.org/
2. Download the **LTS (Long Term Support)** version
3. Run the installer
4. Follow the installation wizard (use default settings)
5. Restart your computer
6. Verify installation: `node --version`

### 2️⃣ Extract the ZIP File

1. Locate the downloaded `find-blood-platform.zip`
2. Right-click and select "Extract All" (Windows) or double-click (Mac/Linux)
3. Choose a destination folder (e.g., `Documents/Projects/`)
4. Remember this location!

### 3️⃣ Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- Or search for "Command Prompt" in Start menu

**macOS:**
- Press `Cmd + Space`
- Type "Terminal" and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

### 4️⃣ Navigate to Project Folder

```bash
cd path/to/find-blood-platform
```

**Example (Windows):**
```bash
cd C:\Users\YourName\Documents\find-blood-platform
```

**Example (macOS/Linux):**
```bash
cd ~/Documents/find-blood-platform
```

**Tip:** You can drag the folder into the terminal to auto-fill the path!

### 5️⃣ Install Dependencies

Run this command:
```bash
npm install
```

**What happens:**
- Downloads all required packages (~300MB)
- Takes 2-5 minutes depending on internet speed
- You'll see a progress bar and package names scrolling

**Wait for the message:**
```
added XXX packages in XXs
```

### 6️⃣ Start the Development Server

```bash
npm run dev
```

**You should see:**
```
VITE v6.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 7️⃣ Open in Browser

1. Open your web browser
2. Go to: **http://localhost:5173/**
3. You should see the FindBlood platform! 🎉

## ✅ Verify Installation

You should see:
- ✅ Red-themed header with "FindBlood" logo
- ✅ Hero section with "Donate Blood, Save Lives"
- ✅ Search section for blood groups
- ✅ Available donors list
- ✅ Navigation menu working

## 🛠️ Troubleshooting

### Problem: "npm: command not found"
**Solution:** Node.js is not installed properly. Reinstall Node.js and restart your computer.

### Problem: "Cannot find module..."
**Solution:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: Port 5173 is already in use
**Solution:** Vite will automatically use another port (5174, 5175, etc.). Check the terminal message.

### Problem: Blank white page
**Solution:**
1. Open browser console (F12)
2. Look for red error messages
3. Try: `npm run dev` again
4. Clear browser cache (Ctrl+Shift+Delete)

### Problem: "Access denied" or "Permission error"
**Solution (Windows):** Run Command Prompt as Administrator
**Solution (Mac/Linux):** Don't use `sudo` - it's not needed

### Problem: Slow installation
**Solution:** This is normal. Installing 300+ packages takes time. Be patient!

## 🎯 Using the Application

### Demo Features:
1. **Register/Login** - Use any email/phone, any 6-digit OTP works
2. **Search Donors** - Filter by blood group and location
3. **Blood Compatibility** - Interactive compatibility checker
4. **Find Centres** - Uses your real GPS location
5. **Become a Donor** - Complete registration flow

### Test Data:
- Sample donors: 8 people across different cities
- Sample blood banks: 5 centres
- All blood types: A+, A-, B+, B-, AB+, AB-, O+, O-

## 📱 Mobile Testing

1. Start the dev server: `npm run dev`
2. Press F12 in browser
3. Click the device/phone icon (toggle device toolbar)
4. Select a mobile device (iPhone, Galaxy, etc.)
5. Test responsive design!

## 🚀 Building for Production

When ready to deploy:
```bash
npm run build
```

Output will be in `dist/` folder - ready to host on any web server!

## 📂 Project Structure Quick Reference

```
find-blood-platform/
├── src/
│   ├── app/
│   │   ├── pages/          ← All page components
│   │   ├── components/     ← Reusable components
│   │   └── utils/          ← Mock data & utilities
│   ├── styles/             ← CSS files
│   └── main.tsx            ← Entry point
├── index.html              ← HTML template
├── package.json            ← Dependencies
├── vite.config.ts          ← Vite configuration
└── README.md              ← Full documentation
```

## 🆘 Still Having Issues?

1. **Check Node.js version:** `node --version` (must be 18+)
2. **Check npm version:** `npm --version` (comes with Node.js)
3. **Delete and reinstall:**
   ```bash
   rm -rf node_modules
   npm install
   ```
4. **Try different terminal:** Use Git Bash, PowerShell, or VSCode terminal
5. **Check README.md** for more detailed documentation

## ⚡ Quick Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop the server
Ctrl + C
```

## 💡 Pro Tips

- **Auto-refresh:** Changes to code automatically reload the browser
- **Hot reload:** Make changes and see them instantly!
- **Console:** Press F12 to see developer tools
- **Port change:** Add `--port 3000` to use different port
- **Network access:** Add `--host` to access from other devices

## 📚 Next Steps

1. ✅ Explore the code in `src/app/pages/`
2. ✅ Customize colors in `src/styles/theme.css`
3. ✅ Modify mock data in `src/app/utils/mockData.ts`
4. ✅ Read the full README.md for architecture details
5. ✅ Check QUICKSTART.md for feature guide

---

**Congratulations! You're ready to use FindBlood! 🩸**

**Questions?** Check the README.md file for detailed information.
