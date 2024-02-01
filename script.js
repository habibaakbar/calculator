console.log('hiba');
// alert('hiba');

let string = "";
let buttons = document.querySelector('.button');
Array.from(buttons).forEach((button) => {
    button.addEeventlistener('click', (e)=>{
        if (e.target.innerHTML ==  '=') {
            string = eval(string);
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML ==  'C') {
            string = ""
            document.querySelector('input').value = string;

        }
         
       
        else{
            console.log('e.target')
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});