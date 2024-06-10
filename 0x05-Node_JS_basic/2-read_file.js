const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
    const lines = fileContent.split();
    const content = lines.map((line) => {
      const values = line.trim().split('\n');
      return values.length > 0 ? values : null;
    })[0];
    const data = content.slice(1);
    console.log(`Number of students: ${data.length}`);
    const fields = Object;
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
    for (const key in fields) {
      if (fields[key]) {
        console.log(
          `Number of students in ${key}: ${fields[key].length}. List: ${fields[key]}`,
        );
      }
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
