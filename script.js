let string = ""
const display =document.getElementById('display');
let buttons = document.querySelectorAll('.button');
// const inputtext = document.querySelector('input');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click' , (e)=>{
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             inputtext.value = string;
//         }
//         if (e.target.innerHTML == 'AC') {
//             string = ""
//             inputtext.value = string;
//         }
//         else if (e.target.innerHTML == '%') {
//             string = parseFloat(string) / 100;
//             inputtext. value = string;

            
//         }
//       else if(e.target.innerHTML == '√') {

        
//           string = Math.sqrt(parseFloat(string));
//           inputtext.value = string;
//         }
    

//         else {
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             inputtext.value = string;
//         }
//     })
// })

function appendToDisplay(value){
    display.innerText += value;
}
function calculateResult() {
    
    try {
      const expression = display.innerText;
      const calculate = new Function('return ' + expression);
      
      const result = calculate();
      
      display.innerText = result;
    //   saveToHistory(expression, result);
    } catch (error) {
      display.innerText = 'Error';
    }
  }
  
function percentage(){
    display.innerText = parseFloat(display.innerText) / 100;
}
function clearAll(){
    display.innerText = "";
}
function clearLastCharacter(){
    display.innerText = display.innerText.slice(0 , -1);
}
function squreRoot(){
    display.innerText = Math.sqrt(parseFloat(display.innerText));
}


// function saveToHistory(expression, result) {
//     const historyList = document.getElementById('historyList');
//     const historyItem = document.createElement('li');
//     historyItem.textContent = `${expression} = ${result}`;
//     historyList.appendChild(historyItem);
//   }

//   function toggleHistory() {
//     const history = document.getElementById('history');
//     history.style.display = (history.style.display === 'none' || history.style.display === '') ? 'block' : 'none';
//   }
  

document.addEventListener('keypress', function (event) {
    const key = event.key;
    const validKeys = '0123456789./*-+%';
    if (validKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Delete') {
        clearAll();
    } else if (key === 'Backspace') {
        clearLastCharacter();
    }
});
