class BancoDeDados {
    constructor() {
        this.alunos = [];
        this.professores = [];
    }

    getAlunos() {
        return this.alunos;
    }


    addAlunos(aluno) {
        this.alunos.push(aluno);
    }

    getProfessores() {
        return this.professores;
    }

    addProfessores(professor) {
        this.professores.push(professor);
    }
}

module.exports = new BancoDeDados();