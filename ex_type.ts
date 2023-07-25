import PromptSync from "prompt-sync";

let prompt = PromptSync();

import {ex1} from "./ex1"; 
import {ex2} from "./ex2";
import {ex3} from "./ex3";
import {ex4} from "./ex4";
import {ex5} from "./ex5";
import {ex6} from "./ex6";


let resposta : string | number = 1;

do{
    console.log("Bem vindo ao menu exercício!");

    resposta = prompt("Digite um número de 1 a 6, para escolher um exercicio, ou 'Sair' para interromper o programa:  ");
    switch(resposta){
        case "1":
            console.log("Você escolheu o exercicio 1");
            ex1();

        break;
    
        case "2":
            console.log("Você escolheu o exercicio 2");
            ex2();

       break;
       case "3":
            console.log("Você escolheu o exercicio 3");
            ex3();

       break;
        case "4":
        console.log("Você escolheu o exercicio 4");
        ex4();

        break;
        case "5":
        console.log("Você escolheu o exercicio 5");
        ex5();

        break;
         
        case "5":
        console.log("Você escolheu o exercicio 6");
        ex6();

        break;
        default:

         console.log("Você não escolheu nenhum exercicio");
        break;
    }


}while(resposta = "sair" );