import PromptSync from "prompt-sync";
let prompt = PromptSync();

export function ex1(){
    console.log("Contador de 1 a 10: ")

    for(let contador : number = 1; contador <= 10; contador ++){
        console.log(contador);
    }


}