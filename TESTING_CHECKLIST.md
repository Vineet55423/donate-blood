# FindBlood Platform - Testing Checklist

Use this checklist to verify everything works after installation.

## ✅ Installation Tests

- [ ] Node.js is installed (`node --version` shows v18+)
- [ ] npm is available (`npm --version` shows version)
- [ ] Project files extracted to a folder
- [ ] Terminal is in project directory
- [ ] `npm install` completed successfully
- [ ] No error messages during installation

## ✅ Server Tests

- [ ] `npm run dev` starts without errors
- [ ] Terminal shows: "Local: http://localhost:5173/"
- [ ] Browser opens and shows the website
- [ ] No console errors (press F12 to check)
- [ ] Can stop server with Ctrl+C

## ✅ Home Page Tests

- [ ] Header shows "FindBlood" logo
- [ ] Navigation menu visible
- [ ] Hero section displays "Donate Blood, Save Lives"
- [ ] Blood group dropdown shows all 8 types
- [ ] Location input field works
- [ ] Search button clickable
- [ ] Donor cards display (6 donors shown)
- [ ] Quick action cards visible (3 cards)
- [ ] Statistics section shows numbers
- [ ] Footer displays correctly

## ✅ Navigation Tests

- [ ] Click "Find Blood" - goes to home
- [ ] Click "Become a Donor" - loads donor page
- [ ] Click "Find Nearby Centre" - loads centres page
- [ ] Click "Blood Compatibility" - loads compatibility page
- [ ] Click "Register / Login" - loads auth page
- [ ] Logo click - returns to home
- [ ] All links work without errors

## ✅ Mobile Responsiveness Tests

- [ ] Press F12 to open DevTools
- [ ] Click device/phone icon (toggle device toolbar)
- [ ] Select "iPhone 12" or similar
- [ ] Header shows hamburger menu
- [ ] Click hamburger - menu slides out
- [ ] All pages display properly on mobile
- [ ] Text is readable
- [ ] Buttons are tap-friendly

## ✅ Become a Donor Page Tests

- [ ] Page loads correctly
- [ ] Benefits cards display (4 cards)
- [ ] Eligibility checklist shows (8 items)
- [ ] Donation process steps visible (4 steps)
- [ ] "Register as Donor" button works
- [ ] Facts section displays
- [ ] Animations smooth

## ✅ Blood Compatibility Tests

- [ ] Blood group buttons display (8 buttons)
- [ ] Click any blood group (e.g., O+)
- [ ] "Can Donate To" section shows
- [ ] "Can Receive From" section shows
- [ ] Compatibility table displays all groups
- [ ] Info box shows universal donor/receiver info
- [ ] Can switch between blood groups smoothly

## ✅ Nearby Centres Tests

- [ ] Page loads with map placeholder
- [ ] "Get My Location" button visible
- [ ] Click button to request location
- [ ] Browser asks for location permission
- [ ] Click "Allow"
- [ ] Coordinates display (lat/long)
- [ ] Centres list shows (5 centres)
- [ ] Distance calculated if location enabled
- [ ] Phone numbers clickable
- [ ] "Get Directions" opens Google Maps

## ✅ Authentication Flow Tests

### Login Page
- [ ] Email/Phone toggle works
- [ ] Can switch between Email and Phone
- [ ] Email input accepts email format
- [ ] Phone input accepts phone format
- [ ] "Send OTP" button enabled after input
- [ ] Click "Send OTP"

### OTP Verification
- [ ] OTP page loads
- [ ] 6 input boxes visible
- [ ] Can type numbers only
- [ ] Auto-focus moves to next box
- [ ] Enter any 6 digits (e.g., 123456)
- [ ] "Verify & Continue" button enabled
- [ ] Click verify
- [ ] Redirects to signup form

## ✅ Signup Form Tests

### User Type Selection
- [ ] Donor and Beneficiary cards show
- [ ] Can click to select Donor
- [ ] Can click to select Beneficiary
- [ ] Selected card highlights

### Personal Information
- [ ] Full name input works
- [ ] Gender dropdown works (Male/Female/Other)
- [ ] Age input (18-65 validation)
- [ ] Weight input (min 50 kg)
- [ ] Blood group dropdown shows all 8 types
- [ ] All fields accept input

### Location Section
- [ ] City, State, Pincode fields work
- [ ] GPS checkbox clickable
- [ ] Check GPS checkbox
- [ ] Browser asks for permission
- [ ] Click "Allow"
- [ ] Coordinates display below checkbox

### Contact Information
- [ ] Phone auto-filled from OTP
- [ ] Email auto-filled from OTP
- [ ] Can enter alternate phone

### Donor Fields (if Donor selected)
- [ ] Tattoo dropdown (Yes/No)
- [ ] Last donation date picker
- [ ] Preferred location input
- [ ] Travel distance dropdown (5/10/20 km)
- [ ] Medical circumstances textarea
- [ ] Emergency availability checkbox

### Beneficiary Fields (if Beneficiary selected)
- [ ] Relationship dropdown works
- [ ] Hospital name input works

### Form Submission
- [ ] Fill all required fields
- [ ] Click "Complete Registration"
- [ ] No validation errors
- [ ] Redirects to eligibility page

## ✅ Eligibility Check Tests

### For Donors
- [ ] Page loads with results
- [ ] Shows eligible or not eligible status
- [ ] Displays all 4 criteria:
  - [ ] Age check (18-65)
  - [ ] Weight check (50+ kg)
  - [ ] Tattoo check
  - [ ] Donation gap check
- [ ] Each criterion shows pass/fail icon
- [ ] If not eligible, shows next eligible date
- [ ] User info summary displays
- [ ] "Go to Home" button works
- [ ] "Find Donation Centres" button (if eligible)

### For Beneficiaries
- [ ] Shows success message
- [ ] Displays welcome message
- [ ] "Go to Home" button works

## ✅ Search Functionality Tests

- [ ] On home page, select blood group "O+"
- [ ] Enter location "Mumbai"
- [ ] Click "Search"
- [ ] Results filter correctly
- [ ] Shows only O+ donors
- [ ] Shows only Mumbai donors
- [ ] Clear search - all donors return

## ✅ Animation Tests

- [ ] Page transitions are smooth
- [ ] Cards have hover effects
- [ ] Buttons scale on hover
- [ ] Mobile menu slides smoothly
- [ ] OTP inputs focus smoothly
- [ ] No janky animations
- [ ] No layout shifts

## ✅ Console Tests (F12)

- [ ] Open browser console (F12)
- [ ] Navigate through all pages
- [ ] No red error messages
- [ ] No 404 errors
- [ ] No React warnings
- [ ] All resources load successfully

## ✅ Browser Compatibility Tests

### Chrome
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Firefox
- [ ] All features work
- [ ] Geolocation works
- [ ] Forms work

### Safari (if on Mac)
- [ ] All features work
- [ ] Mobile view works

### Edge
- [ ] All features work
- [ ] No compatibility issues

## ✅ Performance Tests

- [ ] Page loads in < 2 seconds
- [ ] No lag when scrolling
- [ ] Smooth animations
- [ ] Forms respond quickly
- [ ] Images load properly

## ✅ Data Tests

- [ ] 8 donors visible on home page
- [ ] 5 blood centres on centres page
- [ ] All 8 blood groups in compatibility
- [ ] Mock data displays correctly
- [ ] Donor cards show all info:
  - Name
  - Blood group
  - Age, Gender
  - Location
  - Last donation date
  - Emergency availability

## ✅ Build Tests

- [ ] Run `npm run build`
- [ ] Build completes successfully
- [ ] `dist/` folder created
- [ ] No build errors
- [ ] Run `npm run preview`
- [ ] Preview server starts
- [ ] Production build works

## 🐛 Common Issues Checklist

If something doesn't work:

- [ ] Tried refreshing the page (F5)
- [ ] Checked console for errors (F12)
- [ ] Verified Node.js version is 18+
- [ ] Ran `npm install` successfully
- [ ] Cleared browser cache
- [ ] Tried different browser
- [ ] Stopped and restarted server
- [ ] Checked network connection

## 📊 Test Results Template

```
Date Tested: _______________
Browser: _______________
Node Version: _______________

Tests Passed: ____ / 150
Tests Failed: ____
Issues Found: 
_________________________________
_________________________________

Overall Status: ☐ PASS  ☐ FAIL
```

## ✅ Final Verification

- [ ] ALL pages load correctly
- [ ] ALL forms work properly
- [ ] ALL animations are smooth
- [ ] NO console errors
- [ ] NO broken links
- [ ] NO missing images
- [ ] Mobile view works
- [ ] Location features work
- [ ] Demo OTP works (any 6 digits)
- [ ] Build succeeds

---

## 🎉 Success Criteria

If you checked ✅ for:
- **130+ items** - EXCELLENT! Everything works perfectly
- **100-129 items** - GOOD! Minor issues, still usable
- **< 100 items** - Check installation guide and troubleshooting

---

**All tests passed? Congratulations! 🎉**

Your FindBlood platform is ready to use!

**Some tests failed?**
- Check INSTALLATION.md for troubleshooting
- Verify Node.js version: `node --version`
- Try: `npm install` again
- Check browser console (F12) for errors

---

**Happy Testing! 🩸**
