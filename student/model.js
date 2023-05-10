const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'rakkhlay45',
  password: '09102544',
  database: 'student-db',
});

async function getAll() {
  const query = 'SELECT * FROM Students';
  const [data] = await connection.promise().query(query);
  return data;
}

async function remove(id) {
  const query = 'DELETE FROM Students WHERE id = ?';
  await connection.promise().query(query, [id]);
  return;
}

async function insert(student) {
  const query = 'INSERT INTO Students (title, grade) VALUES (?, ?)';
  const [result] = await connection.promise().query(query, [student.title, student.grade]);
  return { ...student, id: result.insertId };
}

async function update(student) {
  const query = 'UPDATE Students SET title = ?, grade = ? WHERE id = ?';
  await connection.promise().query(query, [student.title, student.grade, student.id]);
  return student;
}

async function get(id) {
  const query = 'SELECT * FROM Students WHERE id = ?';
  const [data] = await connection.promise().query(query, [id]);
  return data.pop();
}

function save(student) {
  if (!student.id) {
    return insert(student);
  } else {
    return update(student);
  }
}

module.exports = {getAll , remove, get,save}
