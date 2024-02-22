let myPhoto = document.querySelector('#my-photo');
let photo2 = document.querySelector("#photo2");
let photo3 = document.querySelector("#photo3");
let photo4 = document.querySelector("#photo4");
myPhoto.addEventListener('dblclick', () => {
    let appendInfo = document.querySelector('#append1');
    appendInfo.innerHTML = "kreo eorig evoiefv eoivnss jdvierngeriv dfjvnesor voidnv isur visjd viseur viej viv";
});

photo2.addEventListener('mouseover',()=>{
    console.log('mouseovered');
    photo2.addEventListener('mouseout',()=>{
        console.log('mouseout')
    })
})