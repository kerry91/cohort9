function calculateBMI() {
  
    /* Get inputs */
    const height = document.getElementById("height").value;
  
    const weight = document.getElementById("weight").value;
  
    const result = document.getElementById("result");

  // Checks the user has provided proper inputs
    if (height === "") {
        result.innerHTML = "Provide a valid Height!";
      document.getElementById("result").style.color = "red";
      }
  
    else if (weight === "") {
        result.innerHTML = "Provide a valid Weight!";
      document.getElementById("result").style.color = "red";
    }
    // If both inputs are valid, calculate the bmi
    else {
  
        // bmi calculation to 0 dec places
        const bmi = (weight / ((height * height) 
                            / 10000)).toFixed(1);
  
        
        if (bmi < 18.6) {result.innerHTML =
            `${bmi} = Under Weight`;
              document.getElementById("result").style.color = "blue";          }
  
        else if (bmi >= 18.6 && bmi < 24.9) 
        {result.innerHTML = 
                `${bmi} = Normal`;
        document.getElementById("result").style.color = "green";}
  
        else if (bmi > 24.9) 
        {result.innerHTML =  
            `${bmi} = Over Weight`;
        document.getElementById("result").style.color = "red";}
        
        else  {
          result.innerHTML = 'Enter a valid input';
          document.getElementById("result").style.color = "red";
        }
    }

}