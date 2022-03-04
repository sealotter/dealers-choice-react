const express = require('express')
const app = express()
const db = require('./db')



const init = async() => {
    try{
        const port = 1994
        app.listen(port, () => console.log(`listening on port ${port}`))

    }catch(ex){
        console.log(ex)
    }
}

init()