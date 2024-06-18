import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((response) => {
        res.write('This is the list of our students\n');
        const fields = Object.keys(response);
        fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        fields.forEach((field) => {
          const students = response[field];
          const numStudents = students.length;
          const firstNames = students
            .map((student) => student)
            .join(', ');

          res.write(
            `Number of students in ${field}: ${numStudents}. List: ${firstNames}\n`
          );
        });

        res.end();
      })
      .catch((err) => {
        res.status(500).end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase(process.argv[2])
      .then((response) => {
        const field = req.params.major;
        const students = response[field];

        if (students) {
          res.write('This is the list of our students\n');
          const firstNames = students
            .map((student) => student)
            .join(', ');

          res.end(`List: ${firstNames}\n`);
        }
        res.status(500).end('Major parameter must be CS or SWE');
      })
      .catch((err) => {
        res.status(500).end('Cannot load the database');
      });
  }
}

export default StudentsController;
