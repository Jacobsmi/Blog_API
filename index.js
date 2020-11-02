const express = require('express')
const {Posts, migrate} = require('./models')
var cors = require('cors')

var app = express()
app.use(cors())

migrate()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/allposts', async (req,res)=>{
	try{
		// Returns all posts that are currently in the database
		const posts_result = await Posts.findAll();
		res.send(posts_result)
	} catch(error){
		console.log(error)
		res.send(JSON.parse(`{
			"status": "error"
		}`))
	}
})

app.get('/allsubjects', async (req,res)=>{
	try{
		const subjects_results = await Posts.findAll({
			attributes: ['subjects']
		})
		res.send(subjects_results)
	}
	catch(error){
		console.log(error)
		res.send(JSON.parse(`{
			"status": "error"
		}`))
	}
})

app.listen(8080, () => {
	console.log("App is listening on Port 8080")
})