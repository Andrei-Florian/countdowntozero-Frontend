// Multistep Form Generation
let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  let x = document.querySelectorAll(".tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.querySelector("#prevBtn").style.display = "none";
    document.querySelector("#cancel").style.display = "inline";
  } else {
    document.querySelector("#prevBtn").style.display = "inline";
    document.querySelector("#cancel").style.display = "none";
  }
  if (n == (x.length - 1)) {
    document.querySelector("#nextBtn").innerHTML = "Add for €2";
  } else {
    document.querySelector("#nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  let x = document.querySelectorAll(".tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.querySelector("#regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let x, y, i, valid = true;
  x = document.querySelectorAll(".tab");
  y = x[currentTab].querySelectorAll(".form-element");
  // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      if (currentTab === 0) {
        if (y[i].value === "") {
          // add an "invalid" class to the field:
          y[i].className += " invalid";
          // and set the current valid status to false
          valid = false;
        }
      } else if (currentTab === 1) {
        const feba = document.querySelector("#FEBA");
        const acs= document.querySelector("#ACS");
        const ds = document.querySelector("#DS");
  
        if (feba.checked === false && acs.checked === false && ds.checked === false) {
          // add an "invalid" class to the field:
          feba.className += " invalid";
          // and set the current valid status to false
          valid = false;
        }
      } else {
        const paymentMethod = document.querySelector("#payment-method");
        
        if (paymentMethod.value === "default") {
          // add an "invalid" class to the field:
          feba.className += " invalid";
          // and set the current valid status to false
          valid = false;
        }
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.querySelectorAll(".step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
  }


function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i, x = document.querySelectorAll(".step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}


// Shape Generation
const colorOrder1 = ["color3", "color2", "color0", "color1", "color4"];
const colorOrder2 = ["color1", "color4", "color3", "color2", "color0"];
const colorOrder3 = ["color2", "color0", "color1", "color4", "color3"];
const colorOrder4 = ["color4", "color3", "color2", "color0", "color1"];
const colorOrders = [colorOrder1, colorOrder2, colorOrder3, colorOrder4];
let colorOrderValue = colorOrders[Math.floor(Math.random()*4)];
let row = 1;

function randomRotation() {
  let rotationValue = Math.floor(Math.random() * 4);
  rotation = `rotation${rotationValue}`;
};

function addShapes() {
  for (colorOrder of colorOrders) {
    const shapeContainer = document.querySelector(`.shapes-${row}`);
    for (color of colorOrder) {
      const newShape = document.createElement("div");
      
      randomRotation();
      newShape.classList.add("base-shape", color, rotation);
      shapeContainer.appendChild(newShape);
        }
      row++;
      }
};

addShapes();