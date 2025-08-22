// Toggle between light and dark mode by adding/removing the "dark" class on
// the body element and updating the theme indicator text.

// Grab reference to the element displaying the active theme
const themeIndicator = document.getElementById('theme-indicator')
// Button that triggers the theme switch
const toggleBtn = document.getElementById('toggle-btn')
// Track current theme state
let isDarkMode = false
// React to user clicking the toggle button
toggleBtn.addEventListener('click', () => {
  // Flip the theme flag
  isDarkMode = !isDarkMode
  // Add/remove the CSS class controlling dark mode
  document.body.classList.toggle('dark', isDarkMode)
  // Update on-page text to reflect new theme
  themeIndicator.textContent = `Current Theme: ${isDarkMode ? 'Dark' : 'Light'}`
})

// aktuelles Datum in deutscher Schreibweise einfügen
document.addEventListener('DOMContentLoaded', () => {
  const dateElem = document.getElementById('change-date')
  if (dateElem) {
    const today = new Date()
    const formatted = today.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    dateElem.textContent = `Diese Änderung wurde am ${formatted} vorgenommen.`
  }
})
