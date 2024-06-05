const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello Holberton School!\n')
  } else if (req.url === '/students') {
    fs.readFile('database.csv', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Error: Cannot load the database\n')
        return
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.trim() !== '')
      const students = lines.map((line) => line.split(','))

      const fields = students.shift()
      const fieldCount = new Map()

      fields.forEach((field) => fieldCount.set(field, []))

      students.forEach((student) => {
        student.forEach((value, index) => {
          fieldCount.get(fields[index]).push(value)
        })
      })

      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.write('This is the list of our students:\n')
      fieldCount.forEach((list, field) => {
        res.write(
          `Number of students in ${field}: ${list.length}. List: ${list.join(
            ', '
          )}\n`
        )
      })
      res.end()
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not found\n')
  }
})

app.listen(1245)

module.exports = app
