//function functionName ("parameter1","parameter2","parameter3","parameter4")
//{code or satements to be executed}

function a(str){
    document.getElementById("demo").innerHTML=str;
}
 
a("hello word!");

/*example = 1*/
 
function addnumber(a,b){
    x=a+b;
    document.getElementById("demo1").innerHTML=x;
}
addnumber(3,4);

//CALLING A FUNCTION

function number(a,b){
    sum=a+b;
    document.getElementById("demo2").innerHTML=sum;

    alert("add number ");
}

//example = 1

function show(){
    alert("http://127.0.0.1:5500/index.html")
}

// return function 
function add(a,b){
    sum=a+b;
    return sum;
}
document.getElementById("demo3").innerHTML = add(5,5);
