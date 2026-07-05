const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        const value = button.textContent;
        const change = display.value.slice(0, -1);
        const operators = ["+", "-", "*","/"];
        const lastNumber = display.value.slice(-1);
        
        
        

        if (value === "AC") {
            display.value = "";
        } 
        
        else if (value === "x²") {
            display.value = Number(display.value) ** 2;
        }

        else if (value === "%") {
            display.value = Number(display.value) / 100;
        }

        else if (value === "=") {
            

            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }

        } 
        
        else if (value === "DEL") {
            if (display.value === "Error") {
                display.value = "";
            } else {
                display.value = change;
            }
           
        }

        else if (display.value === "Error") {
            display.value = value;
        }
        
        else if (
            display.value === "" && 
            operators.includes(value)
        ) {
            display.value = "";
        } 
        
        else if(
            operators.includes(value)&&
            operators.includes(lastNumber)
        ){
            display.value = display.value.slice(0, -1) + value;
        }

        else  {
            display.value += value;
        } 

        
    });
});



