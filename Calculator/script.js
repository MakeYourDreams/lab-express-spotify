

    let firstNum = document.getElementsByTagName('input')[0]
    let secNum = document.getElementsByTagName('input')[1]

    let theAdd = document.getElementById('add');

theAdd.onclick = function(){
    document.getElementById('result').innerText = Number(firstNum.value) + Number(secNum.value);
    console.log(firstNum.value + secNum.value)
}

getElementsByC

let theButton = document.getElementById('the-button');

theButton.onclick = function(){
    console.log('you clicked me');
}

let helloDiv = document.querySelector('.hello');
helloDiv.onmouseover = function(){
    console.log('you hovered')
}


let theInput = document.querySelector('.list > input');



document.querySelector('.list > button').onclick = function(){

    let newThing = document.createElement('li');

    let theAnimal = theInput.value;

    newThing.innerText = theAnimal;


    let theList = document.querySelector('.list > ul')
    theList.prepend(newThing);

    theInput.value = "";

}