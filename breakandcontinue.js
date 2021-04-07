// break
var html ="";
for(var i =0; i<5; i++ ){
        if(i == 5){
            break;
        }
        html += "<li>number"+i+"</li>"; //add string to html
    }
    document.write(html)

//continue
var html ="";
for(var i =0; i<10; i++ ){
        if(i == 0){
            continue;
        }
        html += "<li>number"+i+"</li>"; //add string to html
    }
    document.write(html)