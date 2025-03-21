function gethistory(){
    return document.getElementById("history-value").innerText
}

function printhistory(mum){
    document.getElementById("history-value").innerText = num
}


function getoutput(){
    return document.getElementById("output-value").innerText
}

function printoutput(num){
    if (num == ""){
  document.getElementById("history-value").innerText = num
    }
    else{
     document.getElementById("history-value").innerText = getformatednumber(num)
    }
}

function getformatednumber(num){
    if (num =="-"){
        return ""
    }
    var n=Number(num)
    var value = n.toLocaleString("en")
    return value
}

function reversenumberformat(mum){
    return Number(num.replace('/,/g',""))
}


var operator = document.getElementsByClassName("operator")

for (var i=0; i<operator.length;i++){
    operator[i].addEventListener("click", function(){
        if (this.id=="clear"){
            printhistory("")
            printoutput("")
        }
        else if (this=="backspace"){
            var  output = reversenumberformat(getoutput()).toString()
             if (output){
                output=output.substr(0,output.length-1)
                printoutput(output)
             }
        }
        else {
            var output=getoutput()
            var history=gethistory()
            if(output==""&&history!=""){

                if(isNaN(history[history.length-1])){
                
                history= history.substr(0,history.length-1);
                
                }
                
                }
                
                if(output!="" || history!=""){
                
                output= output==""?output:reverseNumberFormat(output);
                
                history=history+output;
                
                if(this.id=="="){
                
                var result=eval(history);
                
                printOutput(result);
                
                printHistory("");
                
                }
                
                else{
                
                history=history+this.id;
                
                printHistory(history);
                
                printOutput("");
                
                }
            }
        }  
    })
}

var number = document.getElementsByClassName("number");

for(var i =0;i<number.length;i++){

number[i].addEventListener('click',function(){

var output=reverseNumberFormat(getOutput());

if(output!=NaN){ //if output is a number

output=output+this.id;

printOutput(output);

}

});

}



