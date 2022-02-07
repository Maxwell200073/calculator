import React from "react";

const Button = ({ id, value }) => {
    function displayNum(num) {
        const display = document.getElementById("display");
        const calc = document.getElementById("calc");
        if (
            (num.toString().match(/[.]/) &&
                !display.textContent.includes(".")) ||
            num.toString().match(/[0-9]/)
        ) {
            display.textContent !== "0"
                ? (display.textContent = display.textContent + num)
                : (display.textContent = num);
        } else if (num.toString().match(/[*+-/]/) && num.toString() !== ".") {
            // if (calc.textContent[calc.textContent.length - 1].match(/[*+/]/)) {
            //     calc.textContent[calc.textContent.length - 1] = num;
            // } else {
            //     calc.textContent += num;
            // }
            if (display.textContent.match(/[1-9.]/)) {
                calc.textContent !== "0"
                    ? (calc.textContent += display.textContent)
                    : (calc.textContent = display.textContent);
            }
            if (
                calc.textContent.endsWith("/") ||
                calc.textContent.endsWith("*") ||
                calc.textContent.endsWith("+") ||
                calc.textContent.endsWith("-")
            ) {
                calc.textContent =
                    calc.textContent.slice(0, calc.textContent.length - 1) +
                    num;
            } else {
                calc.textContent += num;
            }
            display.textContent = 0;
        }

        if (num.toString() === "AC") {
            display.textContent = 0;
            calc.textContent = 0;
        }
        if (num.toString() === "=") {
            calc.textContent += display.textContent;
            display.textContent = eval(calc.textContent);
            calc.textContent = 0;
        }
    }

    return (
        <button onClick={() => displayNum(value)} id={id}>
            {value}
        </button>
    );
};

export default Button;
