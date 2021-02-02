

plus1.addEventListener("click",function(){
    let input1 = document.getElementById("input1");
    const inputCount = parseInt(input1.value);
    const newCount = inputCount+1;
    input1.value = newCount;
 calculate();
 

} )



mainus1.addEventListener("click",function(){

            let input1 = document.getElementById("input1");
            
            const inputCount = parseInt(input1.value);
            if(inputCount > 0 ){
            const newCount = inputCount-1;
            input1.value = newCount;
           
            calculate();

             }
            
})

plus2.addEventListener("click",function(){
    let input2 = document.getElementById("input2");
    const inputCount = parseInt(input2.value);
    const newCount = inputCount+1;
    input2.value = newCount;
    
    calculate();
})


mainus2.addEventListener("click",function(){
    let input2 = document.getElementById("input2");
    const inputCount = parseInt(input2.value);
    if ( inputCount > 0 ){
    const newCount = inputCount-1;
    input2.value = newCount;
    calculate();

    }
})

function calculate (){

const getInput1 = document.getElementById("input1");
const inputValu1 = parseInt(getInput1.value);
const getInput2 = document.getElementById("input2");
const  inputValue2 = parseInt(getInput2.value);


let totalPrice = inputValu1 * 150 + inputValue2*100;
document.getElementById("subtotal").innerText = totalPrice;

 const result = totalPrice + 50;
 document.getElementById("total").innerText= "$" + result ;

 


}



