const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/students', db.getStudents)
app.get('/students/:studentId', db.getStudentById)
app.get('/grades/:studentId', db.getGradeById)
app.post('/register', db.register)
app.post('/grade', db.grade)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})