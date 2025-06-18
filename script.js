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


// const numberss=[5,5,5,5,5,5,5,6,6,7,4,3,,3]

// const friends=['kamal','salam','nipon','jibon','subornao']

// console.log(numberss.length)
// console.log(friends.length)

// console.log(numberss[3])

// console.log(friends.push('priyanka rani'))
// console.log(friends.pop())
// console.log(friends)

// console.log(friends.shift())
// console.log(friends.unshift('priyanka rani'))
// console.log(friends);


// console.log(friends.includes('salam'))

// console.log(friends.indexOf('nipon'))

// console.log(Array.isArray(numberss));
// console.log(friends.join('|'))

// console.log(friends.slice(2,5))


//  Introduction to  Loop

// var numbers=[44,33,65,6,7,8]

 // for(var x=0; x<=numbers.length; x++){
 //     console.log(x)
 // }

// for(var y of numbers){
//     console.log(y)
// }

// let i = 1;
// while (i <= 5) {
// //   console.log(i);
//   i += 1
// }

// console.log(i)

// let num=1;

// while(num <=10){

//     if(num % 2 == 0){
//         console.log(num)
//     }

//     num++
// }


// for(var x=0; x<40 ; x=x+2){

//     console.log(x);
// }

// for(var y=1; y<50; y=y+2){
//     console.log(y)
// }


// for(let x=10; x >=0; x--){

//     console.log(x);
// }


// 18_7 When to use a break and continue



// for(var i=0; i<60; i++){

//     if(i===10){
//         break
//     }


//     console.log(i);
// }

// for(var y=0; y<60; y++){

//     if(y===10){
//         continue
//     }


//     console.log(y);
// }


// 18_8 (optional) Introduction to Do While Loop


// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

//19_1 Introduction to string and string vs array

// const country='bangladesh';
// const division='RANGPUR';
// const thana='   ruhiya thana';



// console.log(country.toUpperCase());

// console.log(division.toLocaleLowerCase())

// console.log(thana.trim())


// const namess='andor kila bandor bon';


// console.log(namess.slice(3,8));


// console.log(namess.split(' '))

// // const jon=namess.join('|')

// const podi='khala';


// const total=namess.concat(podi);

// console.log(total)

// console.log(podi.includes('k'))

// const letter=' asdf asdf asdf asdf asdf asdf asdf ';

// let reversLetter='';

// for(var letr of letter){

//     console.log(letr)

//     reversLetter=letr + reversLetter;
// }

// console.log(reversLetter)

// let rev=letter.split('').reverse();

// console.log(rev)

//19_5 Introduction to Objects properties and values


const students={
    namess:'mahabub islam',
    age:50,
    cgpa:4.56,
    dep:'bangla',
    languess:['bangla','enlish','china']
}

console.log(students.namess);

const keyss=Object.keys(students);

console.log(keyss)

const values=Object.values(students);

console.log(values);

