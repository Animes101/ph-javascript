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


// const students={
//     namess:'mahabub islam',
//     age:50,
//     cgpa:4.56,
//     dep:'bangla',
//     languess:['bangla','enlish','china']
// }

// console.log(students.namess);

// const keyss=Object.keys(students);

// console.log(keyss)

// const values=Object.values(students);

// console.log(values);




// for(let studen in students){

//     console.log(students[studen])
// }


// const numbers=[3,4,45,5,6,76,7,65,5,434,3,3,3,34,4,5,];


// console.log(numbers.reverse());

// const rev=[];


// for(let num of numbers){

//     // console.log(num)

//     rev.unshift(num)
// }

// console.log(rev)

// console.log(Math.max(...numbers))

// let bigNumber=numbers[0];

// for(let topNum of numbers){

//     if(topNum > bigNumber){
//         bigNumber=topNum;
    
//     }
// }

// console.log(bigNumber);


// const person=['rakin','salam','nabin','Pakhi'];

// console.log(person.sort())


// function display(){

//     console.log('function');
// }

// display();

// 20-2 Add Function parameter, handle multiple parameters


// function display1(x,y){

//     const sum=x + y + z;

//     return sum;
// }

// console.log(display1(30,50));

// function double(numbers){

//     let ddb=numbers * 2;

//     return ddb



// }

// console.log(double(500))

// const stirngss=(str)=>{
//     let totalLength=str.length;

//     return totalLength;


// }

// console.log(stirngss('animes barman is ok'))


// const sumFunctiofn=(allNumber)=>{

//     let total=0;

//     for(let num of allNumber){

//         total +=num
//     }

//     return total;


// }

// let to=sumFunctiofn([55,40,600,200]);

// console.log(to);


// const aple=90;//change hoba na

// let ornage=40;//


// const liYear=(year)=>{
//     if(year % 4 === 0){
//         return true
//     }else{
//         return false
//     }
// }


// console.log(liYear(2043))


// function oddAgerage(numbers){

//     var oddToal=0;

//    for(let number of numbers){
//        if(number % 2 === 1){
//         oddToal += number;
//        }
//    }


//    return oddToal;
// }

// console.log(oddAgerage([60,4,3,3,4,44,65,6,7,6,65,66]))


// const duplacet=[44,44,33,33,3,3,3,];

// function duplacetFunction(dd){
//        let unik=[];
//      for(let d of dd){
        

//         if(unik.includes(d) === false){
//             unik.push(d);
//         }

        

//     }

    

//     return unik;




// }

// console.log(duplacetFunction(duplacet))


// console.log(Math.round(4.80))
// console.log(Math.floor(4.64))
// console.log(Math.ceil(5.60))
// console.log(Math.max(5,6,7,6,5,4,4,4,4,6,6,))
// console.log(Math.min(4,4,5,5,5,4,4,33,22,1))
// console.log(Math.random()*3+1)

// const date=new Date();

// const year = date.getFullYear();

// console.log(year)

// const products=[
//     {name:'tshirt',prices:500,},
//     {name:'tshirt',prices:600,},
//     {name:'tshirt',prices:800,},
//     {name:'tshirt',prices:700,},
// ]


// const totalCost=(fullProduct)=>{
//      let totalPrices=0;
//     for(let product of fullProduct){
    

//         totalPrices=totalPrices + product.prices;
//     }

//     return totalPrices
// }


// console.log(totalCost(products))


// const products=[
//     {name:'tshirt',prices:500,qut:2},
//     {name:'tshirt',prices:600,qut:5},
//     {name:'tshirt',prices:800,qut:6},
//     {name:'tshirt',prices:700,qut:7},
// ];


// function totalPrices(pros){

//     let totalCost=0;

//     for(let pro of pros){

//         let itemsCost=pro.prices * pro.qut;

//         totalCost =totalCost + itemsCost;
//     }

//     return totalCost;

// }



// console.log(totalPrices(products))



// function add(n1,n2){

//     return n1 + n2;

// }

// function subdd(n1,n2){

//     return n1 - n2;

// }

// function mul(n1,n2){

//     return n1 * n2;

// }

// function dive(n1,n2){
//     return n1 % n2

// }



// function calculate(a,b,oparation){

//     switch(oparation){

//         case '+':

//         const result1=add(a,b);
//         console.log(result1);

//         break;

//         case '-':

//         const result2=subdd(a,b);
//         console.log(result2);

//         break;

//         case '*':

//         const result3=mul(a,b);
//         console.log(result3);

//         break;

//         case '/':

//         const result4=dive(a,b);
//         console.log(result4);

//         break;

        

//     }

// }



// calculate(40,50,'+')
// calculate(40,50,'-')
// calculate(40,50,'*')
// calculate(40,50,'/')

///Dom Manupulation

// var ulList=document.getElementsByTagName('ul');

// console.log(ulList);

// var list=document.getElementsByTagName('li')


// for(let li of list){

//     console.log(li.innerText='okkkk');
// }



// var listItems=document.getElementsByClassName('list-items');

// var list=document.getElementById('second-items');

// list.style.color='red'

// list.innerText='addd color is ok'


// var lists=document.querySelector('#last-items');

// lists.innerText='okkkkkkkkkkkk'

// var allItems=document.querySelectorAll('li ')
// console.log(allItems);


// 24-5 Dynamic style, getAttribute, setAttribute, innerText, innerHTML


// var list =document.getElementById('last-items');


// console.log(list.getAttribute('class'));

// console.log(list.getAttribute('id'));

// list.setAttribute('id', 'okk id add');

// console.log(list);


// var allList=document.querySelectorAll('li');

// console.log(allList);


// for( let list of allList){

//     list.classList.add('styleCls')
// }


// var dives=document.querySelector('div');

// console.log(dives.parentElement)

// console.log(dives.childNodes);

// console.log(dives.firstChild)
// console.log(dives.lastChild);

// var ullist=dives.querySelector('ul');

// console.log(ullist);

// console.log(ullist.nextSibling)

// console.log(dives.previousElementSibling)


// var liCreate=document.createElement('li');

// liCreate.innerText='create text node'

// ullist.appendChild(liCreate);


// var btn=document.querySelector('.btn');

// var text=document.querySelector('#show');
 
// btn.addEventListener('click',(e)=>{

//     var textBtn=e.target.innerText;
//     text.innerText=textBtn

//     text.classList.add('styleCls')

// })



// var btn=document.querySelector('#btn');


// btn.addEventListener('click',(e)=>{

//     e.preventDefault();


//     var name=document.getElementById('name').value;
//     var email=document.getElementById('email').value;
//     var password=document.getElementById('pass').value;


//     if(name === '' || email ==='' || password === ''){
//         alert('please fill all input ')
//     }


//     const userData={
//         name:name,
//         email:email,
//         password:password
//     }

//     console.log(userData)
//     //clear input fields
    

    // document.getElementById('name').value='';
    // document.getElementById('email').value='';
    // document.getElementById('pass').value='';


// }

// )


// var namesField=document.getElementById('name');

// document.getElementById('name').addEventListener('focus',()=>{

//     namesField.style.backgroundColor='red';

    
// })


// document.getElementById('name').addEventListener('blur',()=>{

//     console.log('blur i son')

    
// })

// document.getElementById('name').addEventListener('keydown',()=>{

//     console.log('key down i on')

    
// })

// document.getElementById('name').addEventListener('keyup',()=>{

//     console.log('key up i on')

    
// })


// window.addEventListener('keydown',(e)=>{
//     console.log(e.key);
// })


// var pr=document.getElementById('parend');

// var btn=document.getElementById('btn');

// pr.addEventListener('click',(e)=>{

//     console.log('click')

// })

// btn.addEventListener('click',(e)=>{

//     e.stopPropagation();

//     console.log('btn click')
// })

// var prent=document.querySelector('ul');

// prent.addEventListener('click',(e)=>{

//      e.target.removeChild(e.target);

// })
// var liList=document.querySelectorAll('li');
// var ullist=document.querySelector('li');


// for(let li of liList){

//     li.addEventListener('click',(e)=>{

//         e.target.parentElement.removeChild(e.target);
    
//     })
// }


// var button=document.getElementById('add')

// button.addEventListener('click',(e)=>{

//     const licreate=document.createElement('li');
//     licreate.innerText=`hello ${Math.floor(Math.random()*5 + 1)}`


//     ullist.appendChild(licreate)


// })





// triangle calculate


//   var calculateItems=document.getElementById('items')

// function triangleArea(){


//     var base=getHeightAndWidth('base') ;
//     var height=getHeightAndWidth('height')


//     let area= 0.5 *base *height;


//    createElement(area);




// }

// //Rectangle 

// const rectangle=()=>{

//     let widthrec=getHeightAndWidth('widthrec');
//     let lembo=getHeightAndWidth('lembo');

//     let area=widthrec *lembo;

//     createElement(area);


// }

// //Parallelogram  


// const parallelogram=()=>{


//     var base=getHeightAndWidth('pro-base');
//     var height=getHeightAndWidth('pro-height');

//    let area=base * height;

//     createElement(area);


// }

// //get hight and width  


// const getHeightAndWidth=(value1)=>{


//     const height=document.getElementById(value1);

//     const heightNumber=parseFloat(height.value);
  

//     return heightNumber;

// }

// //create element

// const createElement=(area)=>{

//     let createItem=document.createElement('li');
//     createItem.innerText=` Triangle Area is: ${area}`;

//     calculateItems.appendChild(createItem);

//     createItem.addEventListener('click',(e)=>{ 

//         e.target.parentElement.removeChild(e.target)
//     })





// 27-1 Project Overview and Setup alpha




// let play=()=>{

//    hiddenItems('stGame')

//    showItems('playGame');

//    containNewGame();
// }


//    function containNewGame(){

//       setInterval(() => {
//          let randomLetter=randomAlphabet();

//          let  showLetter=document.getElementById('showLetter')

//                showLetter.innerText =randomLetter

//       }, 2000);

    

//    }

// var score=0;
// var life=5;


//     let handleKeyPrss=(e)=>{
//         let  showLetter=document.getElementById('showLetter')

//         let currenLeter=showLetter.innerText;

//         let keyPressKey=e.key.toLowerCase();
//         let curentLetter=currenLeter.toLowerCase();

//         if(keyPressKey === curentLetter){

//             const scoreElement=document.getElementById('score');
//              let score= scoreElement.innerText;

//             let newScore =parseInt(score) + 10;

//             scoreElement.innerText=newScore;

           

//         }else{

//             const lifeElement=document.getElementById('life');
//              let life= lifeElement.innerText;

//              let totallife=parseInt(life) -1;

//              lifeElement.innerText=totallife;

//              if(totallife < 0){
//                 gameOver();
//              }

//         }


//   }

//   let gameOver=()=>{

//     hiddenItems('playGame');
//     showItems('endgame');

//     let finalScore=document.getElementById('score').innerText;
//      document.getElementById('finalScore').innerText=finalScore;

    
//   }

//   const playAgain=()=>{
//     const lifeElement=document.getElementById('life').innerText='5'
//     const scoreElement=document.getElementById('score').innerText='0'
//     hiddenItems('endgame');
//     showItems('playGame');
//   }




//  document.addEventListener('keydown',handleKeyPrss)

 
// 30-1 ES6 Intro difference between var, Let and const


// let numberss=4444;//resign kora jay 

// const numbers=555; //resign kora jay na


// function defaultParamiter(x,y=90){

//     let total=x + y;

//     return total;

// }

// console.log(defaultParamiter(30,30))


// const myNames=`animes ${'barman'}`


// const arrowFunction=(x, z ,...i)=>{

//     let total=x + z + i;

//     return total;


// }


// console.log(arrowFunction(4,30,444,444,444,444,))


// const all=['kamal', 'salam','shine'];


// console.log(...all);



// 30-7 (advanced) Object and Array Destructure



// const phones={
//     name:'sumsang',
//     prices:50000,
//     model:'apple18'
// }

// delete phones.model

// console.log(phones)


// const {name,prices}=phones;

// const keysss=Object.keys(phones);

// console.log(keysss)


// console.log(name,prices)


// const formula=['44',444];

// const [x,y]=formula;

// console.log(x,y)


// const letter={
//     a:'dd',
//     b:'444',
//     c:'44'
// }



// for(let so in letter){

//     console.log(letter[so])
// }

// const latters=['a', 'b','c'];


// for( let latter of latters){

//     console.log(latter);
// }


// 31-2 Access Value, nested object, Optional chaining

// const data=[{name:'animes barman',age:40,nationlty:'bangladesh'}]


// console.log(data[0].age);

// const students=[
//     {
//         name:'animes barman',
//         country:{
//             name:'bangladesh',
//             code:[33,44]
//         }
//     },

//     {
//         name:'animes barman',
//         country:{
//             name:'bangladesh',
//             code:''
//         }
//     }
// ]


// console.log(students[1].country?.code[1]);

//map

// const numbers=[33,44,55,66,77,88,11];


// const result=numbers.map((items)=>{

//        return items * 2


// })


// console.log(result)

// 31-4 foreach, filter, find, and differences between them


// const numberss=[55,66,77,44,33,22,44,55,66,66,66,66,66,66,];

// const not66=numberss.filter((items)=> items !== 66);


// console.log(not66);


// const first66=numberss.find((items)=> items === 66);



// console.log(first66);



// const products=[
//     {
//         name:'apple',
//         proces:4000,
//     },
//     {
//         name:'apple',
//         proces:4000,
//     },
//     {
//         name:'apple',
//         proces:4000,
//     },
//     {
//         name:'apple',
//         proces:5000,
//     },
//     {
//         name:'apple',
//         proces:5000,
//     },
//     {
//         name:'apple',
//         proces:5000,
//     }
// ]



// const productsPrices=products.map((items)=> items.proces);

// console.log(productsPrices)


// const productsHigh=products.filter((items)=> items.proces > 4000);

// console.log(productsHigh)


// const fristHigh=products.find((items)=> items.proces == 5000)

// console.log(fristHigh);

// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce((sum, num) => sum + num, 0);

// console.log(total);

// 31-6 (optional) Introduction to Class and objects


// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   startEngine() {
//     console.log(`${this.brand} ${this.model} is starting...`);
//   }
// }

// const car1 = new Car("Toyota", "Corolla");
// car1.startEngine();

// 32-1 Module Overview, Primitive and non-primitive data type

// let a=90;

// let b=a;

// console.log(a,b);

// b=80;

// console.log(a,b)


// let abu={joy:'web developer'};


// let salm=abu ;

// console.log(salm ,abu);


// abu.joy='bakend';

// console.log(abu , salm)


// 32-2 Null Vs Undefined, different ways you will get undefined


// let first;

// console.log(first);

// function second(a,b){

//     const total=a+ b;

//     console.log(b)

// //no return
// }

// console.log(second(89));

// const neGitiv=(a,b)=>{

//     if(a<0 || b<0){
//         return
//     }

//     return a+b;
// }

// console.log(neGitiv(3,-5))


// const fifth={id:2, name:'area manager', pri:44};

// console.log(fifth.gol);


// const numberss=[3,4,5,6];


// console.log(numberss[9]);

// let ok=undefined;

// let go=null;


// console.log(ok, go)



// 32-3 Different Truthy and Falsy values in JavaScript



// const x=0;


// if(!x){

//     console.log('x is not ture')
// }else if(!!x){


//     console.log( 'x is true')
// }


// const x=90;

// const y='90';


// if( x == y){


//     console.log( 'equal');
// }else if(x === y){

//     console.log( 'not equal')
// }

// 32-5 Block scope global scope simple understanding of Hoisting


// const display=(a,b)=>{


//     let x=a + b ;

//     console.log(x);
// }


// display(3,3)

// console.log(x)



// 32-6 (advanced) Closure, encapsulation, private variable


// const cls=()=>{

//     let total=0;

//     return function(){
//         total ++ ;
//         return total;
//     }
// }


// const firstCls=cls();


// console.log(firstCls())
// console.log(firstCls())
// console.log(firstCls())
// console.log(firstCls())

// const secondcls=cls();


// console.log(secondcls())
// console.log(secondcls())
// console.log(secondcls())
// console.log(secondcls())



// 32-7 (optional) Callback function and pass different functions


// const grtirng=(gritHandler,text)=>{

//     gritHandler(text);
// }


// const gritHandler=(text)=>{

//     console.log('call back function'  + text)
// }

// const grithandler2=(text)=>{

//     console.log('griting handler 2' + text)
// }


// grtirng(gritHandler ,  'some text call back');

// grtirng(grithandler2('solaiman'));



function dispay(x,y,u){

    console.log(arguments);

    const arg=[...arguments]

    console.log(arg)
}


dispay(33,4,2)