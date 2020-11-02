require('dotenv').config()

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL,{
    define:{
        timestamps: false
    }
})

const Posts = sequelize.define('posts', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT
},{
    tablename:"posts"
})

const migrate = () =>{
    Posts.sync({alter: true})
}

module.exports = {
    Posts,
    migrate
}