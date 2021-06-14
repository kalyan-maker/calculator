//create container classs
var div =  document.createElement("div");

//create input 
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "screen");
input.setAttribute("class", "screen");
input.setAttribute("onKeyPress", "Validate()");
input.setAttribute("placeholder", "0");
div.appendChild(input)

//create button class
var div1 = document.createElement("div");
div1.setAttribute('class', 'keywords');

var button1 = document.createElement('button');
button1.setAttribute('class', "oper");
button1.innerText = "(";
div1.appendChild(button1);

var button2 = document.createElement('button');
button2.setAttribute('class', "oper");
button2.innerText = ")";
div1.appendChild(button2);

var button3 = document.createElement('button');
button3.setAttribute('class', "oper");
button3.innerText = "C";
div1.appendChild(button3);

var button4 = document.createElement('button');
button4.setAttribute('class', "oper");
button4.innerText = "%";
div1.appendChild(button4);

var button5 = document.createElement('button');
button5.setAttribute('class', "num");
button5.innerText = "7";
div1.appendChild(button5);

var button6 = document.createElement('button');
button6.setAttribute('class', "num");
button6.innerText = "8";
div1.appendChild(button6);

var button7 = document.createElement('button');
button7.setAttribute('class', "num");
button7.innerText = "9";
div1.appendChild(button7);

var button8 = document.createElement('button');
button8.setAttribute('class', "oper");
button8.innerText = "X";
div1.appendChild(button8);

var button9 = document.createElement('button');
button9.setAttribute('class', "num");
button9.innerText = "4";
div1.appendChild(button9);

var button10 = document.createElement('button');
button10.setAttribute('class', "num");
button10.innerText = "5";
div1.appendChild(button10);

var button11 = document.createElement('button');
button11.setAttribute('class', "num");
button11.innerText = "6";
div1.appendChild(button11);

var button12 = document.createElement('button');
button12.setAttribute('class', "oper");
button12.innerText = "-";
div1.appendChild(button12);

var button13 = document.createElement('button');
button13.setAttribute('class', "num");
button13.innerText = "1";
div1.appendChild(button13);

var button14 = document.createElement('button');
button14.setAttribute('class', "num");
button14.innerText = "2";
div1.appendChild(button14);

var button15 = document.createElement('button');
button15.setAttribute('class', "num");
button15.innerText = "3";
div1.appendChild(button15);

var button16 = document.createElement('button');
button16.setAttribute('class', "oper");
button16.innerText = "+";
div1.appendChild(button16);

var button = document.createElement('button');
button.setAttribute('class' , "num");
button.innerText = "0"
div1.appendChild(button)

var button17 = document.createElement('button');
button17.setAttribute('class', "num");
button17.innerText = ".";
div1.appendChild(button17);

var button18 = document.createElement('button');
button18.setAttribute('class', "num");
button18.innerText = "/";
div1.appendChild(button18);

var button19 = document.createElement('button');
button19.setAttribute('class', "num");
button19.innerText = "=";
div1.appendChild(button19);

div.appendChild(div1);

div.setAttribute('class', 'container');
document.body.appendChild(div)

let screen = document.querySelector('.screen');
buttons = document.querySelectorAll('.keywords');

let screenValue = '';

for ( item of buttons){
    item.addEventListener('click', (e) =>  {
        keywordsText = e.target.innerText;
        // console.log(keywordsText)

        if(keywordsText == 'X') {
            keywordsText= '*';
            screenValue += keywordsText;
            screen.value = screenValue;
        }
        else if (keywordsText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (keywordsText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += keywordsText;
            screen.value = screenValue;
        }
    })
}

function Validate() {

    var regex = /^[0-9]+$/

    var isValid = regex.test(document.querySelector(".screen").value);
    if (!isValid) {
        alert("Only Numbers allowed.");
    }

    return isValid;
}