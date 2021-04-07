let pen ={
    type:'ballpoint',
    color:'red',
    cost:'20'
};
console.log(pen)

// js object

person ={
    name : 'sasi',
    age : "34",
    hobbies:["coding","playing","gaming"],
    ismarried: true

}
function func(){
console.log(person);
document.getElementById("demo6").innerHTML=
("name:"+person.name+"<br>"
        +"age:"+person.age+"<br>"
        +"Hobbies:"+person.hobbies+"<br>"
        +"Married:"+person.ismarried);
   alert("person details sucessfully");
}

/*var message = "hello world"
console.log(message)*/

const names = "sasi";
console.log("the value in the variable is:"+names)
//document.write("the value in the variable is:"+names)