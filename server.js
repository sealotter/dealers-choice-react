const express = require('express')
const app = express()
const db = require('./db')
const path = require('path')

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')))
//app.use('/dist', express.static(path.join(__dirname, 'dist')))


const init = async() => {
    try{
        const port = 1994
        app.listen(port, () => console.log(`listening on port ${port}`))

    }catch(ex){
        console.log(ex)
    }
}

init()