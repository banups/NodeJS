//Exercise : 2
//function to clear set Interval and exit
function clearfunc(arg){
    clearInterval(intervalObj1);
    console.log('Done');
    process.exit()
} ;
//prints hello world in 1 sec interval
const intervalObj1 = setInterval(() => {
    console.log('Hello world');
  },1000);
  //callback with 5 seconds delay
setTimeout(clearfunc,5000);