//if-statement

var age = 21;
if(age>18){
    alert("user is old enough to enter");
}
console.log(age)

//if....else statement

document.getElementById("submit").addEventListener("click",function(){
    age=document.getElementById("age").value;
    if(age > 345){
        alert("user is old enough to enter");
    }
    else{
        alert("user is not old enough to enter");
    }
});