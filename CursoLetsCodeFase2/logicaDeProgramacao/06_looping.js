let count = 1;
while(count<= 100){
    console.log(count)
    count += 1;
}
/*

while sempre confere a condição antes de executar o bloco de código.
Se a condição for falsa, logo que na primeira execução, nunca entraremos dentro do bloco do while. 

Ao usarmos do while o código é executado pelo menos uma vez.
*/ 
let count2 = 1;
do{
    console.log(count2);
    count2 ++;
}while(count2<=100);
