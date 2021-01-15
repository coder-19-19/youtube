const express = require("express")
const cors = require("cors")
const ytdl = require("ytdl-core")
const app = express()

const port = process.env.PORT || 4000

app.use(cors())

app.listen(port, () => {
    console.log(port)
})

app.get("/download3", (req,res) => {
    let URL = req.query.URL
    res.header("Content-Disposition",'attachment; filename="music.mp3"')

    ytdl(URL,{
        format:"mp3",

    }).pipe(res)
})

app.get("/download4", (req,res) => {
    let URL = req.query.URL
    res.header("Content-Disposition",'attachment; filename="video.mp4"')

    ytdl(URL,{
        format:"mp4",

    }).pipe(res)
})
