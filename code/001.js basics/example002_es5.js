var myname='Mahendra';
var colors=['RED','GREEN'];
console.log(Array.isArray(myname));
console.log(Array.isArray(colors));

var mynumarr=[1,2,3,4];

var out=mynumarr.map((e)=>{ return e*2});//looping and modifying
console.log(out);
mynumarr.map((e)=>console.log(e));//simply looping without modifying

var mynumarr1=[1,2,3,4];
var out2=mynumarr1.filter((e)=>{ return e%2===0});
console.log(out2);

var mynumarr2=[1,2,3,4];
mynumarr2.forEach((e)=>console.log(e));

var mynumarr3=[2,4,6,9];
var out3=mynumarr3.every((e)=>{return e%2===0});
console.log(out3);

var mynumarr4=[2,4,6,9];
var out4=mynumarr4.some((e)=>{return e%2===0});
console.log(out4);

var mynumarr5=[2,4,6,9,4];
console.log(mynumarr5.indexOf(4));//gives first index
console.log(mynumarr5.lastIndexOf(4));//gives last index position of element

var myObject={name:"mahendra",age:28};
console.log(JSON.stringify(myObject));

var today= new Date();
console.log(today); //2022-04-19T09:08:38.827Z
console.log(today.valueOf());//1650359341418 provides date in millis