btn = document.getElementById("btn");

btn.onclick = function(){
    alert("the button was clicked, and the tast is to show this dialog box.")
}

//example=1

function myfunc(){
    alert("hello world!")
}

//example=2
bti = document.getElementById("bti");

bti.addEventListener("click",function(){
    alert("hello sasi how r u man");
});

//example=3
select = document.getElementById("city");

select.addEventListener("change",function(){
    val = document.getElementById("city").value;
    document.getElementById("demo6").innerHTML=val;
})