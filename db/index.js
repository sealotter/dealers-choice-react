const Sequelize = require('sequelize')
const db = new Sequelize(`postgres://postgres:banana794@localhost/food_react`)
const {UUID,UUIDV4,STRING,TEXT} = Sequelize

const Food = db.define('food', {    
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey:true
    },
    name: {
        unique: true,
        type:STRING
    }
})

const syncAndSeed = async()=> {
    try{
        await db.sync({force:true})
        const pizza = Food.create({name:'pizza'})
        const sandwich = Food.create({name: 'sandwich'})
        const burger = Food.create({name: 'burger'})
        const chickenWings = Food.create({name:'chicken wings'})
        const pasta = Food.create({name: 'pasta'})
        const salad = Food.create({name: 'salad'})
        const brusselsSprout = Food.create({name:'brussel sprouts'})
        const iceCream = Food.create({name:'Ice cream'})

    }catch(ex){
        console.log(ex)
    }
   
}


module.exports = {
    syncAndSeed,
    Food
   
}

syncAndSeed()