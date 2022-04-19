var username = "Mahendra";
console.log(username);

var mynum = 1;
console.log(typeof mynum);

var myStr = '1';//single code or double code
console.log(typeof myStr);

var myBool = true;
console.log(typeof myBool);

var abc = undefined;
console.log(typeof abc);

console.log('-------------------------');

var myarr = [1, 2, 3, 4, 5];
console.log(myarr);

console.log(myarr[0]);

myarr.forEach((e) => {
    console.log(e);
});

var myObject = [
    { color: "red", value: "#f00" },
    { color: "green", value: "#0f0" },
    { color: "blue", value: "#00f" },
    { color: "cyan", value: "#0ff" },
    { color: "magenta", value: "#f0f" },
    { color: "yellow", value: "#ff0" },
    { color: "black", value: "#000" }
];
console.log(myObject);
console.log(myObject[0]);

myObject.forEach((e) => {
    console.log(e.color + ':' + e.value);
});

function add(num1,num2){
    console.log(num1+num2);
}

add(1,2);

// if if-else if-else if-else

//for loop