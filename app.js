const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./bd');

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('<h1> App Online! </h1>');
});

app.get('/alunos', (req, res) => {
    res.json(bd.getAlunos());
});

app.get('/alunos:id', (req, res) => {
    const idAluno = req.params.id;
    res.json(bd.getAlunoPorId(idAluno));
});

app.post('/alunos', (req, res) => {
    bd.addAlunos(req.body);
    res.send('Aluno adicionado com sucesso!');
});

app.get('/professores', (req, res) => {
    res.json(bd.getProfessores());
});


app.listen(3000, () => console.log('Servidor online na porta 3000'));

// GET /alunos -> retornar uma lista de alunos
// POST /alunos -> adicionar um aluno à lista.

//const idAluno = req.params.id;

//getAlunoPorId (id) {};

// GET /professores -> retornar uma lista de professores
// POST /professores -> adicionar um professor à lista

//const idProfessor = req.params.id;
