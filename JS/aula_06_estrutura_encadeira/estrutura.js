

console.clear();
const h = 11;

const cor = h >= 11 ?'vermelha':'azul';


switch(cor){

    case 'vermelha':
    console.log ('a cor vermelha!');
    break;
    case 'azul':console.log('a cor é azul!');
    break;
    default:console.log('A cor não é vermelha e nem azul');

}

console.clear();

const e ='10';
if(e===10) console.log('e é o numero 10');

else {

    console.log ('Resultado da condição:${e===10}');
    console.log('e não é um numeral');
                      
}

const num1 = new  Array(30,-1,5,3,121);

const num2 =(-2,40,16,111,33,164);

console.log(num1);
console.log(num2);

//acessando elementos diversas do array

console.log('primeiro elemento de num1:${num1[0]}');
console.log('primeiro elemento de num2:${num2[0]}');

console.log('primeiro elemento de num2:${num1[2]}');
console.log('primeiro elemento de nu2:${num2[5]}')

console.clear();

const matrix=[

    ['banana','uva','maça'],
    ['laranja',true,1],
    [null,'uva',-350]
];

//acessando elementos diversos dos arrays:

console.log(`acessa a primeira linha:${matrix[0]}`);
console.log(`acessa a primeira linha:${matrix[0][1]}`);