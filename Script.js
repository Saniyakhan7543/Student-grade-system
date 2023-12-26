

    function grade(){
    
    let webdevelopment = document.getElementById("first").value;
    let maths = document.getElementById("second").value;
    let computer = document.getElementById("third").value;
    let physics = document.getElementById("fourth").value;
    let grades = ""; 
    let totalgrades = parseFloat(webdevelopment) + parseFloat(maths) + parseFloat(computer) + 
                      parseFloat(physics); 

    // parseFloat is a JavaScript function used to parse a string and convert it to a floating-point number. It is particularly useful when you want to extract a numerical value from a string that may contain other characters                  

    let percentage = (totalgrades / 400) * 100; 
    if (percentage <= 100 && percentage >= 80) { 
      grades = "A"; 
    } else if (percentage <= 79 && percentage >= 60) { 
      grades = "B"; 
    } else if (percentage <= 59 && percentage >= 40) { 
      grades = "C"; 
    } else { 
      grades = "F"; 
    } 
    
      // Checking the condition for the fail and pass 
      if (percentage >= 39.5) { 
        document.getElementById( "result").innerHTML =  ` Out of 400 your total is  ${totalgrades}  and percentage is ${percentage}%. Your grade is ${grades}. You are Pass. `; 
      }
       else { 
        document.querySelector("#showdata").innerHTML =  ` Out of 400 your total is  ${totalgrades}  and percentage is ${percentage}%. Your grade is ${grades}. You are Fail. `; 
      } 
     
  };