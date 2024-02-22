let counter = 1;
const abc = (a)=>{
    if(counter>a){
        return;
    }
    console.log('hello');
    counter++;
    abc(a);

}
abc(17);