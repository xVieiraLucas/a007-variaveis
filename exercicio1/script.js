//let nome 
//let idade
//console.log(nome, typeof nome, idade, typeof idade)
//Por conta de não termos atribuido nem um valor, nos deu undefined

const nome = prompt("Qual o seu nome ?")
let idade = Number(prompt("Qual a sua idade ?"))
console.log(nome, typeof nome)
console.log(idade, typeof idade)
console.log(`Olá ${nome}, você tem ${idade} anos`)
// o nome foi impresso como uma string, por conta do comando const e tbm por ser um texto " " 
// a idade por sua vez, agora é um número e ele pode se alterar com o tempo, então necessito que esteja em 
// formato númerico caso eu queira fazer alguma soma.