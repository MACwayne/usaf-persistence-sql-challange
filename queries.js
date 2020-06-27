const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'student',
  password: 'password',
  port: 5432,
})

const getStudents = (request, response) => {
  const searchName = request.query.search
  console.log(searchName);

  if (Object.keys(request.query).length !== 0) {
    if (searchName !== undefined) {
      pool.query('SELECT * FROM students WHERE name = $1', [searchName], (err, results) => {
        if (err) {
          console.log(err);
          response.send({ success: false, message: 'query error', error: err });
          return;
      }
        response.status(200).json(results.rows)
      })
    } else {
      response.status(200).send("Missing 'search' query")
    }
  } else {
    pool.query('SELECT * FROM students ORDER BY studentId ASC', (err, results) => {
      if (err) {
        console.log(err);
        response.send({ success: false, message: 'query error', error: err });
        return;
    }
      response.status(200).json(results.rows)
    })
  }
}

const getStudentById = (request, response) => {
  const id = parseInt(request.params.studentId)

  pool.query('SELECT * FROM students WHERE studentId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getGradeById = (request, response) => {
  const id = parseInt(request.params.studentId)

  pool.query('SELECT * FROM grades WHERE studentId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const register = (request, response) => {
  const { name } = request.body

  pool.query('INSERT INTO students (name) VALUES ($1) RETURNING studentId', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Student added with ID: ${results.rows[0].studentid}`)
  })
}

const grade = (request, response) => {
  const { studentId, grade, classId } = request.body

  pool.query('INSERT INTO grades (studentId, grade, classId) VALUES ($1, $2, $3) RETURNING gradeId', [studentId, grade, classId], (error, results) => {
    if (error) {
      throw error
    }
    console.log(JSON.stringify(results))
    response.status(201).send(`Grade added with ID: ${results.rows[0].gradeid}`)
  })
}

module.exports = {
  getStudents,
  getStudentById,
  getGradeById,
  register,
  grade,
}