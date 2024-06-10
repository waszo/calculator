function set(target) {
     let result =  document.getElementById("output")
     let target_value = target. innerHTML;
     
     
    
  if (target_value == "AC") {
      result.innerHTML = "0" 
    } else if (target_value == "=") {          
        result.innerHTML = eval(result.innerHTML) 
    } else if (target_value == "+" && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "+" && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "+" && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "+" && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if (target_value == "-" && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "-" && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "-" && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "-" && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if (target_value == "-" && result.innerHTML.slice(-1) == ".") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + ".";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == ".") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + ".";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == ".") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + ".";
    } else if (target_value == "." && result.innerHTML.slice(-1) == ".") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + ".";
    } else if (target_value == "." && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "." && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "." && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "." && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if(target_value == "."){
       if(!result.innerHTML.toString().includes(".")){
           result.innerHTML += ".";
       }
    } else {
        if (result.innerHTML == "0") {
            result.innerHTML = target_value
        } else if (result.innerHTML == "00") {
            result.innerHTML = target_value
        } else { 
            result. innerHTML += target_value
        }
        
    }
    if ("+-*/".indexOf(target_value.slice(-1))) {
        
    }
     
}



