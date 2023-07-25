export function ex5(){

    //Programa ira imprimir os 10 primeiros números de Fibonacci

    console.log("10 primeiros números de Fibonacci")
        const contador : number = 10;

    let anterior = 0, atual = 1, soma;

    for (let i = 1; i <= contador; i++) {
        console.log(anterior);
        soma = anterior + atual;
        anterior = atual;
        atual = soma;
    }

}