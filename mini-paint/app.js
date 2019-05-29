let color = 'white';
let colors = ['white', 'red', 'green', 'blue', 'yellow'];

const boxes = Array.from(document.getElementsByClassName('box'));

boxes.forEach(function(box){
    box.addEventListener('click', function(event){
        this.classList.add(color);
    })

    box.addEventListener('dblclick', function(event){
        this.classList.remove.apply(this.classList, colors);
    })
})

const reset = document.getElementById('reset');

reset.addEventListener('click', function(){
    boxes.forEach(function(box){
        box.classList.remove.apply(box.classList, colors);
    })
})

const red = document.getElementById('red');
red.addEventListener('click', function(){
    color = 'red';
})

const green = document.getElementById('green');
green.addEventListener('click', function(){
    color = 'green';
})

const blue = document.getElementById('blue');
blue.addEventListener('click', function(){
    color = 'blue';
})

const yellow = document.getElementById('yellow');
yellow.addEventListener('click', function(){
    color = 'yellow';
})

const white = document.getElementById('white');
white.addEventListener('click', function(){
    color = 'white';
})