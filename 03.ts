import { createInterface } from 'readline/promises'
import { stdin as input, stdout as output } from 'process'

const rl = createInterface({ input, output })

async function calculadora() {

    let n1: number = Number(await rl.question("Digite "))
     let operacao: string = String(await rl.question("digite a operação "))
    let n2: number = Number(await rl.question("Digite "))
    
    let resul: number

    switch (operacao) {
        case "+":

            resul = n1 + n2
            break;

        case "-":

            resul = n1 - n2
            break;

        case "*":

            resul = n1 * n2
            break;

        case "/":
            if (n2 !== 0) resul = n1 / n2
            else console.log("erro 1")
            break
        default:
            console.log("Erro")

    }

    console.log(`${resul}`)

    rl.close()

}
calculadora()