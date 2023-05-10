function renderForm(student) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Student list</title>
      <link rel="stylesheet" href=" /style.css" />
    </head>
    <body>
      <form action="/student/save" method="post">
        <input type="hidden" id="id" name="id" value="${student.id}" />
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" value="${student.title}" />
        </div>
        <div>
          <label for="id">Grade:</label>
          <input type="text" id="grade" name="grade" value="${student.grade}" />
        </div>
        <div>
          <button type="submit">save</button>
        </div>
      </form>
    </body>
    </html>  
      `}; 
         
  module.exports = renderForm;