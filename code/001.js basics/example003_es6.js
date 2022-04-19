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