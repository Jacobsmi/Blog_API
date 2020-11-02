const express = require('express')
const {Posts, migrate} = require('./models')

var app = express()

migrate()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(8080, () => {
	console.log("App is listening on Port 8080")
})
