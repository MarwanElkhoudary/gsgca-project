const dbConnection = require('../db_connection');

const editProjectsQuery = (newProject, cb) => {
  const sql = {
    text: 'UPDATE project SET name = $1, description = $2, githublink = $3, websitelink = $4, imgurl = $5, cohort_id = $6 WHERE id = $7',
    values: [newProject.nameVal, newProject.descriptionVal,
      newProject.gitLinkVal, newProject.webLinkVal, newProject.imgUrlVal,
      newProject.cohortId, newProject.projectId],
  };
  dbConnection.query(sql, (err, result) => {
    if (err) return cb(err);
    return cb(null, result.rows);
  });
};

module.exports = editProjectsQuery;
