
import PromptSync from "prompt-sync";
let prompt = PromptSync();


export function ex3(){
    console.log("Programa imprimirá apenas os números impares de 0 a 50");

    // Faça um programa que imprima os números ímpares de 0 a 50;

        for(let cont : number = 1; cont <= 50; cont +=2){
            console.log(cont);
        }
}