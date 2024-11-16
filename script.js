    let operands = document.getElementById("operand")
    function fun(event){
        operands.textContent += event.target.textContent
    }

    function reset(){
        operands.textContent = "";
    }

    function del(){
        operands.textContent = operands.textContent.slice(0,-1);
    }   

    function equal(){
        // validate a string opreation if it is correct else print incorrect format.
        console.log("string to evaluvate " , event.target.textContent)
        let expression = operands.textContent.replace(/x/g,"*");
        try{
            let result = eval(expression);
            operands.textContent = result;  
        }catch(error){
            operands.textContent = "Incorrect syntax";
        }
    }