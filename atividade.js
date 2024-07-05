function somarNumeros(){
    let a= 3,b= 4,soma
    soma=a+b
    console.log(soma)


}
somarNumeros()

function positivoNegativo(){
    let a=0
   
    if(a>0){
        console.log(a +" é Positivo")
    }else if(a<0){
        console.log(a +" é Negativo")
    }else if(a=0){
        console.log(a +" é Neutro")
    }
 }
 positivoNegativo()



function contarLetra(frase, letra) {
   
    frase = frase.toLowerCase();
    letra = letra.toLowerCase();


    let contador = 0;


    for (let i = 0; i < frase.length; i++) {
       
        if (frase[i] === letra) {
            contador++;
        }
    }
  return contador;
}


const frase = "Meu nome é Gabriel França Anderson";
const letra = "a";
const resultado = contarLetra(frase, letra);


console.log(`A letra '${letra}' aparece ${resultado} vezes na frase.`);






function calcularMedia(nota1, nota2, nota3) {
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    return media;
}


const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 6.5;


const mediaFinal = calcularMedia(nota1, nota2, nota3);


console.log(`A média das notas é: ${mediaFinal.toFixed(2)}`);



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const numeroAleatorio = getRandomIntInclusive(1, 10);
console.log(`Número aleatório entre 1 e 10: ${numeroAleatorio}`);











const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(`A soma dos elementos é: ${soma}`);

function contarPalavrasUnicas(frase) {
   
    const palavras = frase.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(" ");
   
    // Armazenar
    const palavrasUnicas = {};
   
    // Adiciona ao objeto
    for (const palavra of palavras) {
        palavrasUnicas[palavra] = true;
    }
   
    // Retorna
    return Object.keys(palavrasUnicas).length;
}




const minhaFrase = "O homem é o lobo do homem";
const numeroPalavrasUnicas = contarPalavrasUnicas(minhaFrase);
console.log(`Número de palavras únicas na frase: ${numeroPalavrasUnicas}`);





function criarDespesa(descricao, valor, data) {
    return {
        descricao: descricao,
        valor: valor,
        data: data
    };
}


const despesa1 = criarDespesa("Compra de supermercado", 150.75, "2024-07-05");
const despesa2 = criarDespesa("Pagamento de aluguel", 1200.00, "2024-07-01");


console.log(despesa1);
console.log(despesa2);




function calculosIMC(){
    let peso= 56, altura =1.72 , IMV = peso/(altura ** 2);


    if(IMV < 18.5){
    console.log("Baixo peso")
    }else if (IMV >= 18.5 && IMV <= 24.9){
    console.log("Peso Normal")}
    else{
    console.log("Acima do Peso")
    }
}
calculosIMC()

