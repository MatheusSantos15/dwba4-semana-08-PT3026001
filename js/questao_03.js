
function mostrarDadosAlunos() {

    let nome1 = "João da Silva";
    let nota1_1 = 7; 
    let nota1_2 = 8.5; 
    let pesoNota1 = 0.6;
    let pesoNota2 = 0.4;
    let notaPonderada1_1 = nota1_1 * pesoNota1;
    let notaPonderada1_2 = nota1_2 * pesoNota2;
    let notaTotal1 = notaPonderada1_1 + notaPonderada1_2;

 
    let nome2 = "Maria Carolina";
    let nota2_1 = 9; 
    let nota2_2 = 7.5; 
    let notaPonderada2_1 = nota2_1 * pesoNota1;
    let notaPonderada2_2 = nota2_2 * pesoNota2;
    let notaTotal2 = notaPonderada2_1 + notaPonderada2_2;

  
    let nome3 = "Carlos Pereira";
    let nota3_1 = 6; 
    let nota3_2 = 9; 
    let notaPonderada3_1 = nota3_1 * pesoNota1;
    let notaPonderada3_2 = nota3_2 * pesoNota2;
    let notaTotal3 = notaPonderada3_1 + notaPonderada3_2;

    
    alert(`Aluno: ${nome1}\nNota 1: ${nota1_1}\nNota 2: ${nota1_2}\nNota Total: ${notaTotal1}`);
    alert(`Aluno: ${nome2}\nNota 1: ${nota2_1}\nNota 2: ${nota2_2}\nNota Total: ${notaTotal2}`);
    alert(`Aluno: ${nome3}\nNota 1: ${nota3_1}\nNota 2: ${nota3_2}\nNota Total: ${notaTotal3}`);
}


window.onload = mostrarDadosAlunos;