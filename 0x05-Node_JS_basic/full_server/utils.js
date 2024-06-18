import fs from 'fs';

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    try {
      const fileContent = fs.readFileSync(path, 'utf-8');
      const lines = fileContent.split();
      const content = lines.map((line) => {
        const values = line.trim().split('\n');
        return values.length > 0 ? values : null;
      })[0];
      const data = content.slice(1);
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
      resolve(fields);
    } catch (err) {
      reject();
    }
  });
}

export default readDatabase;
