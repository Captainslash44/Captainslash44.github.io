let mode = false; // False is for prefix mode - True for postfix mode.
// let prefix_expression = [];
let postfix_expression = [];



let calculate_button;
let toggle_button;
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


