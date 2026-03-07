# Quick Start Guide - FindBlood Platform

## 🚀 Get Started in 3 Simple Steps

### Step 1: Install Node.js
If you don't have Node.js installed:
1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Install it on your computer
4. Verify installation by opening terminal/command prompt and typing:
   ```
   node --version
   ```
   You should see a version number like `v18.x.x` or higher

### Step 2: Install Dependencies
1. Extract this ZIP file to a folder
2. Open terminal/command prompt
3. Navigate to the project folder:
   ```
   cd path/to/find-blood-platform
   ```
4. Install all required packages:
   ```
   npm install
   ```
   This will take 2-3 minutes to download all dependencies.

### Step 3: Run the Application
1. Start the development server:
   ```
   npm run dev
   ```
2. Wait for the message: `Local: http://localhost:5173/`
3. Open your web browser and go to: **http://localhost:5173/**

That's it! The FindBlood platform should now be running! 🎉

## 📋 What You Can Do

### Try These Features:

1. **Search for Donors**
   - On the home page, select a blood group (e.g., "O+")
   - Enter a location (e.g., "Mumbai")
   - Click "Search"

2. **Register as a Donor**
   - Click "Register / Login" in the header
   - Choose Email or Phone
   - Enter your contact info (any email/phone works for demo)
   - Enter any 6-digit code for OTP (e.g., 123456)
   - Fill out the registration form
   - See your eligibility status!

3. **Check Blood Compatibility**
   - Click "Blood Compatibility" in the navigation
   - Select a blood group to see compatible types

4. **Find Nearby Centres**
   - Click "Find Nearby Centre"
   - Allow location access when prompted
   - See centres sorted by distance

## 🎯 Demo Mode Information

This is a **frontend demo** with mock data:
- ✅ Use any email/phone for registration
- ✅ Use any 6-digit code for OTP verification
- ✅ All donor data is sample/mock data
- ✅ Geolocation works with real browser GPS

## 🛑 Common Issues & Solutions

### Issue: "npm is not recognized"
**Solution**: Node.js is not installed or not in PATH. Reinstall Node.js.

### Issue: Port 5173 already in use
**Solution**: Vite will automatically use another port. Check the terminal message.

### Issue: Blank white screen
**Solution**: 
1. Check browser console for errors (F12)
2. Try clearing browser cache
3. Make sure `npm install` completed successfully

### Issue: Location not working
**Solution**: Click "Allow" when browser asks for location permission.

## 💡 Tips

- **Refresh Page**: Press F5 to reload (clears all data)
- **Developer Tools**: Press F12 to see console and network activity
- **Mobile View**: In browser dev tools (F12), toggle device toolbar to test mobile view
- **Stop Server**: Press `Ctrl+C` in the terminal to stop the server

## 📁 Project Files

Important files you might want to customize:
- `src/app/pages/` - All page components
- `src/app/components/` - Reusable components
- `src/app/utils/mockData.ts` - Sample donor and centre data
- `src/styles/theme.css` - Color theme and styling

## 🔄 Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist/` folder.

## ❓ Need Help?

1. Check the main **README.md** file for detailed documentation
2. Make sure Node.js version is 18 or higher: `node --version`
3. Try deleting `node_modules` folder and running `npm install` again

---

**Happy coding! 🩸 Donate Blood, Save Lives!**
