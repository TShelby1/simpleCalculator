function calculation(){
    console.log("Calculating ...");
    // get the alues from the prompt and store them in two variables (lets)
    let number1=Number(prompt("Enter number 1"));
    let number2=Number(prompt ("Enter number 2"))

    //  do the operations and store the results in variables (need four variables)
    let quotient=number1/number2;
    let sum=number1+number2;
    let product=number1*number2;
    let subtractionSum=number1-number2;
    // display the result in the html

    document.getElementById("addition").innerHTML=`<p>The Addition Sum is: ${sum}  </P>`;
    document.getElementById("division").innerHTML=`<p>The quotient is: ${quotient}  </P>`;
    document.getElementById("multiplication").innerHTML=`<p>The product is: ${product}  </P>`;
    document.getElementById("subtraction").innerHTML=`<p>The Subtraction Sum is: ${subtractionSum}  </P>`;
}
