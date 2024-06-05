const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n');

    const validLines = lines.filter((line) => line.trim() !== '');

    if (validLines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const header = validLines[0].split(',');

    const fieldIndex = header.indexOf('field');
    const firstNameIndex = header.indexOf('firstname');

    const fieldData = {};

    for (let i = 1; i < validLines.length; i++) {
      const student = validLines[i].split(',');

      const field = student[fieldIndex];
      const firstName = student[firstNameIndex];

      if (!fieldData[field]) {
        fieldData[field] = { count: 0, list: [] };
      }

      fieldData[field].count += 1;
      fieldData[field].list.push(firstName);
    }

    const totalStudents = validLines.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, data] of Object.entries(fieldData)) {
      console.log(
        `Number of students in ${field}: ${data.count}. List: ${data.list.join(
          ', '
        )}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
