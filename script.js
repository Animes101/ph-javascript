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
    

    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('pass').value='';


// }

// )


// var namesField=document.getElementById('name');

// document.getElementById('name').addEventListener('focus',()=>{

//     namesField.style.backgroundColor='red';

    
// })