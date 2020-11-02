require('dotenv').config()

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL,{
    define:{
        timestamps: false
    }
})

const Posts = sequelize.define('posts', {
    title: DataTypes.STRING,
    subjects: DataTypes.STRING,
    body: DataTypes.TEXT
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