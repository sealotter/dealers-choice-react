const express = require('express')
const app = express()
const {db, Food} = require('./db')
const path = require('path')

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')))

//app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/api/foods', async(req, res, next) => {
    try{
        const foods = await Food.findAll()
        console.log(foods.length)
        res.send(foods)

    }catch(ex){
        next(ex)
    }
})

app.delete('/api/foods/:id', async(req, res, next) => {
    try{
        const food = await Food.findByPk(req.params.id)
        await food.destroy()
        res.sendStatus(204)
        
    }catch(ex){
        next(ex)
    }
})

const init = async() => {
    try{
        const port = 1994
        app.listen(port, () => console.log(`listening on port ${port}`))

    }catch(ex){
        console.log(ex)
    }
}

init()