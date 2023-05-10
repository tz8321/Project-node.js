const {getAll,remove, get,save} = require('./model');
const renderForm = require('./form');

async function listAction(request, response) {
  const students = await getAll();
  const pugPath = `${__dirname}/views/list`; 
  response.render(pugPath,{students}); 
}

async function removeAction(request, response) {
  const id = parseInt(request.params.id, 10);
  await remove(id);
  response.redirect(request.baseUrl);
}

async function formAction(request, response) {
  let student = { id: '', title: '', grade: '' };

  if (request.params.id) {
    student = await get(parseInt(request.params.id, 10));
  }

  const body = renderForm(student);
  response.send(body);
}

async function saveAction(request, response) {
  const student = {
    id: request.body.id,
    title: request.body.title,
    grade: request.body.grade,
  };
 
  await save(student);
  response.redirect(request.baseUrl);
}

module.exports = {listAction , removeAction , formAction ,saveAction } 