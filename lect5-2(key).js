document.addEventListener('DOMContentLoaded', function() {
    let keydown = document.querySelector('#1');
    let keyup = document.querySelector('#2');
    let keypress = document.querySelector('#3');

    keydown.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if(keydown.value==='red'){
            keydown.style.backgroundColor = 'red';
            }
        }
    });
});