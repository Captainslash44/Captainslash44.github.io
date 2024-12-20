let display = document.getElementById("result");
// let prefix_expression = [];
// let postfix_expression = [];


let calculate_button;
let toggle_button;
let night_button;
let clear_button;
let prefix_input;
let postfix_input;


function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}



function calculatePrefix(expression){

    if (expression == "" || expression == "0")
        return "0"

    if (expression.length == 1)
        return expression

    let prefix_expression = [];

    for (let i = expression.length - 1; i >= 0; i--){

        let  n = expression[i];

        if (! isNaN(parseInt(n)) )
            prefix_expression.push(n.charCodeAt(0) - '0'.charCodeAt(0)); // pushing the string as digit to stack.
        

        else if (isNaN(n)){
            let num1 = prefix_expression.pop()
            let num2 = prefix_expression.pop()
            if (n == "+"){
                prefix_expression.push(add(num1,num2)); 
            }
            else if(n == "-"){
                prefix_expression.push(substract(num1,num2));  
            }
            else if (n == "*"){
                prefix_expression.push(multiply(num1,num2));
            }
            else if (n == "/"){
                prefix_expression.push(divide(num1,num2));
            }
            else{
                return "Invalid Expression";
            }
        }
        
    }
    return prefix_expression.pop();
}


function calculatePostfix(expression){

    if (expression == "" || expression == "0")
        return "0"

    if (expression.length == 1)
        return expression

    let postfix_expression = [];

    for (let i = 0; i < expression.length; i++){

        let n = expression[i];

        if (! isNaN(parseInt(n)) )
            postfix_expression.push(parseInt((n.charCodeAt(0) - '0'.charCodeAt(0))));

        else if (isNaN(n)){
            let num2 = postfix_expression.pop();// the values of numbers were switched since we are reading the same way
            let num1 = postfix_expression.pop(); // but evaluating in the opposite direction.
            if (n == "+"){
                postfix_expression.push(add(num1,num2)); 
            }
            else if(n == "-"){
                postfix_expression.push(substract(num1,num2));  
            }
            else if (n == "*"){
                postfix_expression.push(multiply(num1,num2));
            }
            else if (n == "/"){
                postfix_expression.push(divide(num1,num2));
            }
            else{
                return "Invalid Expression";
            }
        }
    }
    return postfix_expression.pop();
}


function toggleMode(){
    if(prefix_input.disabled == true){
        prefix_input.disabled = false;
        postfix_input.value = "";
        postfix_input.disabled = true;
    }
    else{
        prefix_input.disabled = true;
        prefix_input.value = "";
        postfix_input.disabled = false;
    }
}

function clear_all(){
    display.innerHTML = "";
    prefix_input.value = "";
    postfix_input.value = "";
}


prefix_input = document.getElementById("prefix-input");
postfix_input = document.getElementById("postfix-input");
calculate_button = document.getElementById("calculate-button");
toggle_button = document.getElementById("toggle-button");
night_button = document.getElementById("night-day");
clear_button = document.getElementById("clear-button");

postfix_input.disabled = true;

toggle_button.addEventListener("click", toggleMode);

clear_button.addEventListener("click", clear_all);

calculate_button.addEventListener("click", () =>{
    
    if (prefix_input.disabled == true){
        display.innerHTML = (calculatePostfix(postfix_input.value));
    }
    else{
        display.innerHTML = (calculatePrefix(prefix_input.value));
    }
})
        
