//EXERCICIO 1------------------------------------------

const nomeDoProduto = prompt('Insira o seu produto')
let precoDoProduto = Number(prompt('Insira o preço do produto'))
precoDoProduto = precoDoProduto - 1

console.log(`O produto ${nomeDoProduto} custa R$ ${precoDoProduto}`);

//EXERCÍCIO 2-------------------------------------------

let num1 = Number(prompt('Insira um número aqui'))
let num2 = Number(prompt('Insira outro número aqui'))
let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2
let resto = num1 % num2

console.log(`Os números digitados foram: ${num1} e ${num2}`);
console.log(`A soma destes números é: ${soma}\n`);
console.log(`A subtração destes números é: ${subtracao}\n`);
console.log(`A multiplicação destes números é: ${multiplicacao}\n`);
console.log(`A divisão destes números é: ${divisao}\n`);
console.log(`O resto destes números é: ${resto}\n`);

//EXERCÍCIO 3-------------------------------------------

let numSorteado = Math.floor(Math.random()*10)+1;
let palpite = Number(prompt('Insira um número de 1 a 10'))

console.log(`O número sorteado foi ${numSorteado}`);	
if(palpite < numSorteado){
    console.log(`O número ${palpite} é menor que o número sorteado`);
} else if(palpite > numSorteado){
    console.log(`O número ${palpite} é maior que o número sorteado`);
}else{
    console.log(`ACERTOU!, O número ${palpite} foi o número sorteado!`);
};

//EXERCÍCIO 4-------------------------------------------

let idade = Number(prompt('Qual sua idade?'))
let altura = Number(prompt('Qual sua altura?'))
let saude = prompt('Você tem problema cardíaco? S/N')

if(idade >= 18 && altura >= 160 && saude === 'N'){
    console.log('Seu acesso é permitido neste clube');
}else{
    console.log('Você não tem permissão para acessar o parque!');
}

//EXERCÍCIO 5------------------------------------------

let frase = "  Hoje vou comer cenoura, ebaaa  ";

console.log(frase, frase.length);
console.log(frase.trim());
console.log(frase.toLowerCase())
console.log('Possui a palavra comer?', frase.includes('comer'))
console.log('Possui a palavra batata?', frase.includes('batata'))

let fraseCopia = frase.replaceAll('cenoura','batata')

console.log(fraseCopia);
console.log('Possui a palavra comer?', fraseCopia.includes('comer'))
console.log('Possui a palavra batata?', fraseCopia.includes('batata'))

//EXERCÍCIO 6------------------------------------------

const listaDeCompras = ['batata','cenoura','beterraba'];

console.log(listaDeCompras[1]);
console.log('Tamanho da nossa lista', listaDeCompras.length);
listaDeCompras.push('mandioca');
console.log('tem cenoura?', listaDeCompras.includes('cenoura'))
listaDeCompras.splice(1,1)

console.log(listaDeCompras);

//EXERCÍCIO 7-------------------------------------------

let arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

function dividindo(arrayNumbers) {
    let array1 = arrayNumbers[0] / 2
    let array2 = arrayNumbers[arrayNumbers.length-1] / 2
    arrayNumbers[0]=array1
    arrayNumbers[arrayNumbers.length-1] = array2
    return arrayNumbers
}
console.log(dividindo(arrayNumbers));

// //ARROW FUNCTIONS
let dividindo2 = (arrayNumbers)=>{
    let array1 = arrayNumbers[0] / 2
    let array2 = arrayNumbers[arrayNumbers.length-1] / 2
    arrayNumbers[0]=array1
    arrayNumbers[arrayNumbers.length-1] = array2
    return arrayNumbers
}
console.log(dividindo2(arrayNumbers));

//EXERCÍCIO 8---------------------------------------------

const objeto = {
    nome: 'Thiago',
    idade: 36,
    generoMusical: 'Rock',
}

console.log(`O nome desta pessoa é ${objeto.nome} ela tem ${objeto.idade} anos e gosta de ${objeto.generoMusical}`);

const novoObjeto = {
    ...objeto,
    nome: 'Felipe',
}

console.log(novoObjeto);

//EXERCÍCIO 9----------------------------------------------

const number = Number(prompt('Digite um número'))

if(number %2 === 0){
    console.log('este número é par')
}else{
    console.log('Este número é ímpar');
}

//EXERCÍCIO 10---------------------------------------------

const bichinho = prompt('Digite um bichinho')

if(bichinho === 'cachorro'){
    console.log('Au au')
}else if(bichinho === 'gato'){
    console.log('Miau')
}else if(bichinho === 'vaca'){
    console.log('Muuuu');
}else{
    console.log('Não encontramos seu bichinho');
}

//COM O SWITH CASE

switch (bichinho) {
    case 'cachorro':
        console.log('Au au');
        break
    case 'gato':
        console.log('Miau');
        break
    case 'vaca':
        console.log('Muuuuu');
        break;
    default:
        console.log('Não encontramos seu bichinho');
        break;
}

//EXERCÍCIO 11-------------------------------------------

const numeros = [11,15,18,14,12,13]

let i = 0
let maior = -Infinity
while (i < numeros.length) {
    if(numeros[i] > maior){
        maior = numeros[i]
    }
    i++
}
console.log(`O maior número é ${maior}`);

//COM O FOR

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maior){
        maior = numeros[i]
    }
     }
   console.log(`O maior número é ${maior}`);

COM O FOR OF

for(let numero of numeros){
    if(numero > maior){
        maior = numero
    }
}
console.log(`O maior número é: ${maior}`);

//EXERCÍCIO 12---------------------------------------------

const professor = {
    nome: 'Letícia Chijo',
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ['Chrono Tigger','Undertale','Hollow Knight'],
    contaPiada: ()=> console.log('É pavé ou pacume?'),
    pet:{
        nome: 'Polly',
        especie: 'cachorrinha',
        raca: 'Lhasa Apso',
        snacksFavoritos: ['Biscoito','Maçã','Frango']
    }
}

const verificaAulas = (aula)=>{
    if(aula){
        return 'Dou'
    }else{
        return 'não dou'
    }
}
const aulasBack = verificaAulas(professor.aulasBack)
const aulasFront = verificaAulas(professor.aulasFront)

const jogos = []

for(let i=1; i<= professor.jogosFavoritos.length; i++){
    jogos.push(`${i}) ${professor.jogosFavoritos[i-1]}`)
}
console.log(jogos);

const frase = console.log(`Oi! Eu me chamo ${professor.nome} e tenho ${professor.idade} anos. ${aulasFront} aulas de front e ${aulasBack} aulas de back. Meus jogos favoritos são: ${jogos}. Tenho uma ${professor.pet.especie} chamada ${professor.pet.nome} que gosta de: ${professor.pet.snacksFavoritos[1]}`);

professor.contaPiada()

//EXERCÍCIO 13--------------------------------------------------------

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
   ]

   const produtosComDescontos = produtos.map((prod)=>{
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
   })

   console.log(produtosComDescontos);

   const hortifruti = produtos.filter((prod)=>{
    return prod.categoria === 'Hortifruti'
   })

   console.log(hortifruti);

   const hortifrutiComDesconto = produtos.filter((prod) =>{
    return prod.categoria === 'Hortifruti'
   }).map((prod)=>{
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
   })

   console.log(hortifrutiComDesconto);