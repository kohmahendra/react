for (var v = 1; v < 3; v++) {
    console.log('inside var:' + v);
}
console.log('outside var:' + v);

console.log('------------------------------');

for (let l = 1; l < 3; l++) {
    console.log(l);
}
//console.log(l);

const c = 10;
//c=c+1;
console.log(c);

const user = () => console.log('hello');
user();

const add = (i, j) => { return i + j; };
console.log(add(7, 6));

const square = i => { return i * i; };
console.log(square(7));

class User {
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=dob;
    }

    printHello(){
        console.log('Hello');
    }

   
}

let u= new User();
u.firstName='John';
u.lastName='Manda';
u.dept='Electronics';
console.log(u);
console.log(JSON.stringify(u));
u.printHello();

const myarray =[10,11,12,13,14,15];
for(const a of myarray){
    console.log(a);
}

for(const a in myarray){
    console.log(a);
}

function printMe(name,aggreeedTerms=true){
    console.log(name+':'+aggreeedTerms);
}

printMe('John');
printMe('John',false);

function addAll(...i){
    return i.reduce((a,b)=>a+b,0);
}

console.log(addAll(1,2,3,4,5));

function printMe(param1,param2,...remaining){
    console.log(param1);
    console.log(param2);
    console.log(remaining);
}

console.log(printMe(1,2,3,4,5));

let iArr=[1,2,3,4];
let jArr=[5,6,7,8];
let kArr=[...iArr,...jArr];
kArr.forEach((e)=>console.log(e));

let person={
    firstName:"Mahendra",
    lastName:"Pappu"
}

const {firstName,lastName} =person;
console.log(firstName+':'+lastName);

//array Destructuring 
let numbers=[1,2,3,4]
  
const [i,j,k] =numbers;
console.log(i+':'+j+':'+k);