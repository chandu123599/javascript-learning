var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
      var html = "";
      
      for(var i = 0; i < fruits.length; i++) {
         html +=  fruits[i] ;
      }
      
      console.log(html);

      //example =1

      for(var i=0; i<1; i++){
          document.write("<p> hello world ! </p>")
      }
// for of loop js
//example = 1
cities = ["munbai","abuja","manila"];
for(sasi of cities){
    document.write(sasi + "<br>")
}

//javascript while loop 

//example =1
a=0;
while(a<3){
    document.write("<p> hi </P>"); a++;
}

//example=2

fruits =["apples", "bananas","oranges"];
len = fruits.length;
i = 0;
html = "";

while(i<len){
    html+= "<p> i like"+fruits[i]+".</p>";
    i++;
}
document.write(html)

//do.......while loop

i=0
do{
    document.write("<p> how are you! </p>");
    i++;
}while(i<3);