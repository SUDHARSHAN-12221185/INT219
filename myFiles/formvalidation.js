let name = document.querySelector('#name').value
let name1 = document.querySelector("#name1")
const check = ()=>{
    if(name.length === 0){
        name1.innerHTML="required"
    }
    else if(name.length>0 && name.length<5){
        name1.innerHTML="too short";
    }

}

let button = document.querySelector("button")
button.addEventListener('click',()=>{
    console.log(name.value);
})