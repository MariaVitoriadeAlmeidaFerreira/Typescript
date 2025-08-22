import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output} from 'process';

const rl = createInterface({input, output});

async function calcularnotas() {

let n1: number = Number(await rl.question("Digite um Valor "));
let n2: number = Number(await rl.question("Digite um valor "));
let n3: number = Number(await rl.question("Digite um Valor "));

let resultado: number = (n1 + n2 + n3) / 3;

if(resultado >= 10){

console.log("Aprovado\n")
}

else {
    console.log("Reprovado\n")
}



rl.close()
    
}

calcularnotas()