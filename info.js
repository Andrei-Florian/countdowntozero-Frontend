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
addShapes(4);