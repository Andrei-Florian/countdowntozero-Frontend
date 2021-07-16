function randomRotation() {
  let rotationValue = Math.floor(Math.random() * 4);
  rotation = `rotation${rotationValue}`;
}

const colorOrder1 = ["color3", "color2", "color0", "color1", "color4"];
const colorOrder2 = ["color1", "color4", "color3", "color2", "color0"];
const colorOrder3 = ["color2", "color0", "color1", "color4", "color3"];
const colorOrder4 = ["color4", "color3", "color2", "color0", "color1"];
const colorOrders = [colorOrder1, colorOrder2, colorOrder3, colorOrder4];
// const colorOrdersSmall = [colorOrder1, colorOrder2, colorOrder3];
let colorOrderValue = colorOrders[Math.floor(Math.random()*4)];
let row = 1;

function addShapes(rowNumber) {

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
}

function addSmallShapes() {
    for (color of colorOrderValue) {
        const newShape = document.createElement("div");
        const smallShapes = document.querySelector(".small-shapes");

        randomRotation();
  
        newShape.classList.add("base-shape", color, rotation);
        smallShapes.appendChild(newShape);
      }
}

addShapes();
addSmallShapes();

const tooltip = document.querySelector("#myTooltip");
const ethButton = document.querySelector("#eth-button");

function textCopier() {
  let ethInput = document.createElement("input");
  ethInput.classList.add("eth-input");
  ethInput.value = "0x78382323828328616712172671271";
  ethButton.appendChild(ethInput); 
  let copyText = document.querySelector(".eth-input");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    ethButton.removeChild(ethInput);

    tooltip.innerHTML = "Copied!";
  }
  
  function tooltipFunc() {
    tooltip.innerHTML = "Copy to clipboard";
  }

ethButton.addEventListener("click", textCopier);
ethButton.addEventListener("mouseout", tooltipFunc);