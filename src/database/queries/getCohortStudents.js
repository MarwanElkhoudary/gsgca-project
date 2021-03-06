const dbConnection = require('../dbConnection');

const getCohortStudentsQuery = (id, cb) => {
  const sql = {
    text: 'select cohort.name AS cohortName, student.id as "studentId",student.cohort_id,student.githublink,student.img_url,student.name,student.username from student join cohort ON cohort.id = student.cohort_id where cohort.id = $1',
    values: [id],
  };
  dbConnection.query(sql, (err, result) => {
    if (err) return cb(err.DETAIL);
    return cb(null, result.rows);
  });
};

module.exports = getCohortStudentsQuery;
