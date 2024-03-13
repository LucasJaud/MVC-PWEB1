class DisciplinaService{

    constructor(alunoService){
        this.repositorioDisciplina = new DisciplinaRepositorio(); 
        this.alunoService = alunoService;
    }

    inserir(codigo,nome){
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if(disciplinaPesquisada.length > 0){
            throw new Error("disciplina ja existe");
        }

        const disciplinaNova = new Disciplina(codigo,nome);
        this.repositorioDisciplina.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo){
        return this.repositorioDisciplina.listar().filter(
            disciplina => disciplina.codigo == codigo);
    }

    remover(codigo){
        this.repositorioDisciplina.remover(codigo);
    }
    inserirAluno(codigo,matricula){
       const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
       const alunoPesquisado = this.alunoService.pesquisarPorMatricula(matricula);
       if(disciplinaPesquisada.length ==0){
            throw new Error("disciplina não existe");
        }
        if(alunoPesquisado.length ==0){
            throw new Error("aluno nao existe");
        }
        
        // console.log(disciplinaPesquisada);
        // console.log(disciplinaPesquisada.length);
        // console.log(alunoPesquisado);
        // console.log(alunoPesquisado.length);
       


        disciplinaPesquisada[0].alunos.push(alunoPesquisado[0]);
    }

    listar(){
        return this.repositorioDisciplina.listar();
    }

}