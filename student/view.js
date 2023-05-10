function render(students) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Student list</title>
    </head>
    <body>
      <table>
        <thead><tr><th>Id4</th><th>Title</th></tr></thead>
        <tbody>
          ${students
            .map((student) => `<tr><td>${student.id}</td><td>${student.title}</td></tr>`)
            .join('')}
        </tbody>
      </table>
    </body>
    </html>
    `}; 
    module.exports = render