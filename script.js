const mp4 = document.querySelector("#mp4")
const mp3 = document.querySelector("#mp3")
const input = document.querySelector("input")
const mode = document.querySelector("#mode")
const theme = document.querySelector("#theme")



mp3.addEventListener("click", () => {
    sendURL3(input.value)
})

mp4.addEventListener("click", () => {
    sendURL4(input.value)
})


const sendURL3 = (URL3) => {
   window.location.href = `https://downtube.netlify.app/download3?URL=${URL3}`
}
const sendURL4 = (URL4) => {
    window.location.href = `https://downtube.netlify.app/download4?URL=${URL4}`
}

mode.addEventListener("click", () => {
    if(theme.getAttribute("href") == "light.css"){
        theme.href = "dark.css"
        mode.textContent = "Light Mode"
    }
    else{
        theme.href = "light.css"
        mode.textContent = "Dark Mode"
    }
})

