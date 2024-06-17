const http = require('http');
const fs = require('fs');
const { argv } = require('process');

async function countStudents(path, res) {
  try {
    const fileContent = await fs.readFileSync(path, 'utf-8');
    const lines = fileContent.split();
    const content = lines.map((line) => {
      const values = line.trim().split('\n');
      return values.length > 0 ? values : null;
    })[0];
    const data = content.slice(1);
    res.write(`Number of students: ${data.length}\n`);
    const fields = {};
    data.forEach((line) => {
      const element = line.split(',');
      const fname = element[0];
      const field = element[3];
      if (field in fields) {
        fields[field].push(` ${fname}`);
      } else {
        fields[field] = [fname];
      }
    });
    const keys = Object.keys(fields);
    const lastKey = keys[keys.length - 1];
    for (const key in fields) {
      if (fields[key]) {
        if (key === lastKey) {
          res.end(
            `Number of students in ${key}: ${fields[key].length}. List: ${fields[key]}\n`,
          );
        } else {
          res.write(
            `Number of students in ${key}: ${fields[key].length}. List: ${fields[key]}\n`,
          );
        }
      }
    }
    res.end();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents(argv[2], res);
  } else {
    res.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
