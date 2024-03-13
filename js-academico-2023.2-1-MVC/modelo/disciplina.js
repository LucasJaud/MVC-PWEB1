class Disciplina{

    constructor(codigo,nome){
        this._codigo =codigo;
        this._nome =nome;
        this._alunos =[];
    }

    set nome(novoNome){
        this._nome =novoNome;
    }
    get nome(){
        return this._nome;
    }
    set codigo(novoCodigo){
        this._codigo =novoCodigo;
    }
    get codigo(){
        return this._codigo;
    }
    get alunos(){
        return this._alunos;
    }
}