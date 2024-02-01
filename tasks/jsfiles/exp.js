let a= document.getElementById("name").value;
let name1 = document.getElementById("name1")
function check(){
    if(a.length === 0){
        name1.innerHTML="required";
    }
   else if(a.length<4 && a.length>0){
        name1.innerHTML="it should be minimum 4 character long";
    }
}

console.log(name1.length);
