const fs = require('fs');
const csv = require('csv-parser');

function countStudents(fileName) {
  const students = [];
  const fieldData = {};

  fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', (row) => {
      students.push(row);

      const field = row.field;
      const firstName = row.firstname;

      if (!fieldData[field]) {
        fieldData[field] = { count: 0, list: [] };
      }

      fieldData[field].count += 1;
      fieldData[field].list.push(firstName);
    })
    .on('end', () => {
      console.log(`Number of students: ${students.length}`);

      for (const [field, data] of Object.entries(fieldData)) {
        console.log(
          `Number of students in ${field}: ${
            data.count
          }. List: ${data.list.join(', ')}`
        );
      }
    })
    .on('error', (err) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
