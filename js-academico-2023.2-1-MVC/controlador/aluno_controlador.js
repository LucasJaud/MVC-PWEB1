class AlunoControlador {

    constructor() {
        this.servico = new AlunoService();
        this.servicoDisciplina = new DisciplinaService(this.servico);
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const idadeElemento = document.querySelector("#idade");
        const matriculoElemento = document.querySelector("#matricula");
        const alunoInserido = this.servico.inserir(nomeElemento.value, Number(idadeElemento.value),
            matriculoElemento.value);
        const listaAlunosElemento = document.querySelector("#listaAlunos");
        if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

    inserirDisciplinaHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent =`${disciplina.codigo} -Disciplina: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    inserirDisciplina(){
        const codDisciplina =document.querySelector("#codigo");
        const nomeDisciplina =document.querySelector("#disciplina");
        const  disciplinaInserida =this.servicoDisciplina.inserir(Number(codDisciplina.value),nomeDisciplina.value);
        const listaDisciplina =document.querySelector('#listaDisciplina');
        if(disciplinaInserida){
            this.inserirDisciplinaHtml(disciplinaInserida,listaDisciplina);
        }
    }

    inserirAlunoDisciplina(){
        const cod = document.querySelector('#codDisciplina');
        const mat = document.querySelector('#matAluno');
        const AlunoDisciplinaInserido = this.servicoDisciplina.inserirAluno(cod.value,mat.value);
        if(AlunoDisciplinaInserido){
            console.log(AlunoDisciplinaInserido);
        }

    }

    listarDisciplinas(){
        const lista = this.servicoDisciplina.listar();
        lista.map(elem => console.log(elem));
    }

}
