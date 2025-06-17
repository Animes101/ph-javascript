//var

// var weight=90;

// console.log(weight);

// var places='thakurgaon';

// console.log(places);

//16-4 Variable data types, Numeric, String, Boolean

// var numbers=80;
// var stringss='stringesss';
// var bool=true;

// console.log(typeof(numbers));
// console.log(typeof(stringss));
// console.log(typeof(bool))


//16-5 JavaScript Keyword, Variable name naming convention


//camelase case use

//16-6 Know the fundamentals of JS Numbers


// var chokolat=4.50;
// var mango=80;
// var ornage='33'

// var total=mango+ parseInt(chokolat);

// console.log(total);


// var numbersTofixed=5.5059599594490;

// console.log(numbersTofixed.toFixed(5))


//16-7 Introduction to arithmetic operators

// var x=90;
// var y=100;

// var total=x+y;

// console.log(total);


// var u=10;
// var k=3;

// console.log(u/k);
// console.log(u%k);


// console.log(u=u+70);

// console.log(u +=40);
// console.log(u -=40);
// console.log(u *=40);
// console.log(u /=40);
// console.log(u +='44');


// 17_1 Compare variables and Comparison operato

//Biger: >
//less: <
//equal: ==
//>=
//<=
//!=  and &&  or || 


// const  apple=90;
// const ornage=50;

// console.log(apple > ornage)

// console.log(ornage <apple)

// console.log(apple == ornage);

// console.log(apple != ornage);

// console.log(apple === ornage)

// 17_3 Introduction to if Else Condition

// if(50>20){
//     console.log('ok')
// }else{
//     console.log('no')
// }
// 17_4 Multiple condition Logical Operators




// if(40>30 && 30<90){
//     console.log('ok')
// }else{
//     console.log('no')
// }


// const tshirtPrices=500000;

// if(tshirtPrices > 50000 ){
//     // discount

//     const discount=tshirtPrices * 10 /100;
//     const payAmount=tshirtPrices -discount;

//     console.log(payAmount)
// }else{
//     console.log(tshirtPrices)
// }

// 17_7 (advanced )If-else shorthand Ternary Operator


// console.log(400>90 ? 'okk' : 'noo')

// 17_8 (advanced) Logical Not Operator

// const isLoading=false;

// if(!isLoading){

//     console.log('okkk')
// }else{
//     console.log('nooo')
// }



// Array length, index, Get and set by index


const numberss=[5,5,5,5,5,5,5,6,6,7,4,3,,3]

const friends=['kamal','salam','nipon','jibon','subornao']

console.log(numberss.length)
console.log(friends.length)

console.log(numberss[3])

console.log(friends.push('priyanka rani'))
console.log(friends.pop())
console.log(friends)

console.log(friends.shift())
console.log(friends.unshift('priyanka rani'))
console.log(friends);


console.log(friends.includes('salam'))

console.log(friends.indexOf('nipon'))

console.log(Array.isArray(numberss));
console.log(friends.join('|'))

console.log(friends.slice(2,5))
