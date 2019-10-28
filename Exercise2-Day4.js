
function readFile(name){
var fileraed=require('fs').readFileSync(name, "utf-8", (err, data) => {
    if (err) { console.log(err) }
    console.log(data);
})
var readString=fileraed.toString()
var linetxt =readString.split('\n')
printline(linetxt);
}
readFile('Exercise1-Day4.txt');
readFile('Exercise2-Day4.txt')

function printline(linetxt){
    for(var i=0;i<linetxt.length;i++){
        console.log(linetxt[i])
        
        require('fs').appendFile("Exercise2a.txt", linetxt[i], (err) => {
        if (err) console.log(err);
       // console.log("Successfully Written to File.");
        });
    }
   // console.log('File read operation at the end')
}