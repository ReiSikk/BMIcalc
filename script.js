


//array to store the objects in
const bmiArray = [];

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const nameInput = document.getElementById("name");
console.log(weightInput, heightInput);
const calculateBtn = document.querySelector("#calculateButton");
let result = document.querySelector("#result");

    //on keyup, the value is stored in the variables
    weightInput.addEventListener("keyup", function () {
        weight = parseFloat(weightInput.value)
        bmi = weight / (height * height);
    console.log(weight, height, bmi)
    })
    heightInput.addEventListener("keyup", function () {
        height = parseFloat(heightInput.value)
        bmi = weight / (height * height);
    console.log(weight, height, bmi)
    });



function calculateBMI() {
    console.log("calculateBMI");
    //get the values from the input fields
    let weight = weightInput.value;
    let height = heightInput.value / 100; //convert to m
    let name = nameInput.value;
    let bmi = weight / (height * height);



  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid weight and height.");
    return;
  }
    //create object with info
    const bmiObject = {
        name: name,
        weight: weight,
        height: height,
        bmi: bmi.toFixed(2) // round to 2 decimals
    }
    
    bmiArray.push(bmiObject);
    
    //display the results in the UI
    document.getElementById("result").textContent = bmi;

      // Clear the input field values
     weightInput.value = "";
     heightInput.value = "";
     nameInput.value = "";
    console.log(bmiArray, "Bmi array");
}


calculateBtn.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Prevent the default form submission behavior
      event.preventDefault();
      // Call the calculateBMI function
      calculateBMI();
    }
  });
  
  // Make the button navigable with the "Tab" key
  calculateBtn.tabIndex = 0;

//event listener for the button
document.getElementById("calculateButton").addEventListener("click", calculateBMI);