import PromptSync from "prompt-sync";
let prompt = PromptSync();



export function ex4(){
    let numero : number = parseInt(prompt("Digite um numero para saber sua multiplicação: "))


    for(let contador = 0; contador <= 10; contador ++){

        console.log(numero + " x "+ contador + " = "+ numero * contador);
    }


}