let buttons = document.getElementsByClassName("num_opr");
let display = document.getElementsByClassName("display");
let body = document.getElementsByClassName("calculator");

let display_expression="", solving_expression="", answer;

// this is for mouse events

buttons[0].addEventListener("click",(e)=>{
    if(e.target.innerHTML.length<=1){

        if(e.target.innerHTML!="C" && e.target.innerHTML!="√"){
            if(e.target.innerHTML=="÷"){
                display_expression += "÷";
                solving_expression += "/";
            }

            else if(e.target.innerHTML=="%"){
                display_expression += "%";
                solving_expression += "/100";
            }

            else if(e.target.innerHTML=="x"){
                display_expression += "x";
                solving_expression += "*";
            }

            else if(e.target.innerHTML=="±"){
                display_expression += "-";
                solving_expression += "-";
            }

            else{
                display_expression += e.target.innerHTML;
                solving_expression += e.target.innerHTML;
            }

            display[0].innerHTML = display_expression;
        }

        if(e.target.innerHTML == "C"){
            display[0].innerHTML = "00";
            answer = 0;
            display_expression = "";
            solving_expression = "";
        }

        if(e.target.innerHTML == "√"){
            answer = Math.sqrt(eval(solving_expression)).toFixed(5);
            display[0].innerHTML = answer;
            display_expression=answer;
            solving_expression=answer;
        }        
    }
})

buttons[1].addEventListener("click",(e)=>{
    if(e.target.innerHTML.length<=1){
        if(e.target.innerHTML!="=" && e.target.innerHTML!='⌫'){
            display_expression += e.target.innerHTML;
            solving_expression += e.target.innerHTML;

            display[0].innerHTML = display_expression;
        }

        if(e.target.innerHTML == "=" && display[0].innerHTML!="00"){
            answer = eval(solving_expression);
            display[0].innerHTML = answer;
            display_expression=answer;
            solving_expression=answer;
        }

        if(e.target.innerHTML == "⌫" && display[0].innerHTML!="00"){
            answer_display = display_expression.slice(0,display_expression.length-1);
            answer_solve = solving_expression.slice(0,solving_expression.length-1);
            display[0].innerHTML = answer_display;
            display_expression=answer_display;
            solving_expression=answer_solve;
        }
    }
})




// this is for keyboard events
let space = document.getElementsByTagName("body");

space[0].addEventListener("keydown",(e)=>{

    if(e.key>=0 && e.key<=9){
        display_expression += e.key;
        solving_expression += e.key;
    }

    else{
        switch(e.key){
            case "/":
                display_expression += "÷";
                solving_expression += "/";
                break;
            
            case "*":
                display_expression += "x";
                solving_expression += "*";
                break;

            case "-":
                display_expression += "-";
                solving_expression += "-";
                break;

            case "+":
                display_expression += "+";
                solving_expression += "+";
                break;

            case "%":
                display_expression += "%";
                solving_expression += "%";
                break;

            case "C":
                display[0].innerHTML = "00";
                answer = 0;
                display_expression = "";
                solving_expression = "";
                break;

            case "Enter":
                if(display[0].innerHTML!="00"){
                    answer = eval(solving_expression);
                    display[0].innerHTML = answer;
                    display_expression=answer;
                    solving_expression=answer;
                }
                break;

            case "Backspace":
                if(display[0].innerHTML!="00"){
                    answer_display = display_expression.slice(0,display_expression.length-1);
                    answer_solve = solving_expression.slice(0,solving_expression.length-1);
                    display[0].innerHTML = answer_display;
                    display_expression=answer_display;
                    solving_expression=answer_solve;
                }
                break;
        }
    }

    display[0].innerHTML = display_expression;
})

