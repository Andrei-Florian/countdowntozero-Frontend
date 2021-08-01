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
    document.querySelector("#cancel-anchor").style.display = "inline";
  } else {
    document.querySelector("#prevBtn").style.display = "inline";
    document.querySelector("#cancel").style.display = "none";
    document.querySelector("#cancel-anchor").style.display = "none";
  }
  if (n == (x.length - 1)) {
    document.querySelector("#nextBtn").innerHTML = "Add for €2";
  } else {
    document.querySelector("#nextBtn").innerHTML = "Continue";
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
          y[i].classList.add("invalid");
          // and set the current valid status to false
          valid = false;
        }
      } else if (currentTab === 1) {
        const feba = document.querySelector("#FEBA");
        const acs= document.querySelector("#ACS");
        const ds = document.querySelector("#DS");
  
        const charityLabels = document.querySelectorAll(".charity-label");

        if (feba.checked === false && acs.checked === false && ds.checked === false) {
          // add an "invalid" class to the field:
          for (let i = 0; i < charityLabels.length; i++) {
            charityLabels[i].classList.add("invalid");
          }
          // and set the current valid status to false
          valid = false;
        }
      } else {
        const paymentMethod = document.querySelector(".payment-method");
        
        if (paymentMethod.value === "default") {
          console.log("COCK")
          // add an "invalid" class to the field:
          paymentMethod.classList.add("invalid");
          // and set the current valid status to false
          valid = false;
        }
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      const formElements = document.querySelectorAll(".form-element");
      for (let i = 0; i < formElements.length; i++) {
        formElements[i].classList.remove("invalid");
      }
    }
    return valid; // return the valid status
  }


function fixStepIndicator(n) {
  // Move circle
  const media375 = window.matchMedia("(min-width: 375px)");
  const media700 = window.matchMedia("(min-width: 700px)");
  const media1750 = window.matchMedia("(min-width: 1750px)");
  const circle = document.querySelector("#circle");

  if (media1750.matches) {
    if (n === 0) {
      circle.style.transform =  "translateX(0px)";
    } else if (n === 1) {
      circle.style.transform =  "translateX(171px)";
    } else {
      circle.style.transform =  "translateX(342px)";
    }
  } else if (media700.matches) {
    if (n === 0) {
      circle.style.transform =  "translateX(0px)";
    } else if (n === 1) {
      circle.style.transform =  "translateX(135px)";
    } else {
      circle.style.transform =  "translateX(270px)";
    }
  } else if (media375.matches){
    if (n === 0) {
      circle.style.transform =  "translateX(0px)";
    } else if (n === 1) {
      circle.style.transform =  "translateX(138px)";
    } else {
      circle.style.transform =  "translateX(276px)";
    }
  } else {
    if (n === 0) {
      circle.style.transform =  "translateX(0px)";
    } else if (n === 1) {
      circle.style.transform =  "translateX(112px)";
    } else {
      circle.style.transform =  "translateX(224px)";
    }
  }
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
