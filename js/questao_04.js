
class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}


let alunos = [
    new Aluno("João", "Silva", 7, 8.5),
    new Aluno("Maria", "Carolina", 9, 7.5),
    new Aluno("Carlos", "Pereira", 6, 9),
    new Aluno("Nina", "Macadamia", 5, 6),
    new Aluno("Pedro", "Certezas", 8, 5)
];


function mostrarDadosAlunos() {
    alunos.forEach(aluno => {
        alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
    });
}


window.onload = mostrarDadosAlunos;