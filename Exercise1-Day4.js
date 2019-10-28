var fileraed=require('fs').readFileSync('Exercise1-Day4.txt');
var readString=fileraed.toString()
var linetxt =readString.split('\n')
console.log(linetxt.length);
//.forEach(function(line){line;console.log("Line"+ line);})
printline(linetxt);
function printline(linetxt){
    for(var i=0;i<linetxt.length;i++){
        console.log(linetxt[i])
    }
    console.log('File read operation at the end')
}