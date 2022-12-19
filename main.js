const bulb = document.querySelector('#💡')

const preferenceDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const browserTheme = preferenceDark ? 'dark' : 'light'

const themeLocalStorage = localStorage.getItem("theme") ?? browserTheme


document.documentElement.setAttribute('data-theme', themeLocalStorage)

themeLocalStorage === 'dark' ?
    bulb.style.opacity = "0.2" :
    bulb.style.opacity = "1"


bulb.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute('data-theme') == 'light'
        ? 'dark' : 'light'

    theme === 'dark' ?
        bulb.style.opacity = "0.2" :
        bulb.style.opacity = "1"

    document.documentElement.classList.add('color-theme-in-transition')
    document.documentElement.setAttribute('data-theme', theme)

    window.setTimeout(() => {
        document.documentElement.classList.remove('color-theme-in-transition')
    }, 1000)

    localStorage.setItem("theme", theme)
}) 