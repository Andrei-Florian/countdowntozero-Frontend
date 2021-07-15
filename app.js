// function randomColor () {
//     let colorValue = Math.floor(Math.random()*5);
//     color = `color${colorValue}`;
// }

function randomRotation() {
  let rotationValue = Math.floor(Math.random() * 4);
  rotation = `rotation${rotationValue}`;
}


// function addElement () {
    //     const shapeContainer = document.querySelector('.shapes-1')
    //     const newShape = document.createElement('div');
    
    //     randomColor();
    // randomRotation();
    
    //     newShape.classList.add('base-shape', color, rotation);
    //     shapeContainer.appendChild(newShape);
    // }
    const colorOrder1 = ["color3", "color2", "color0", "color1", "color4"];
    const colorOrder2 = ["color1", "color4", "color3", "color2", "color0"];
    const colorOrder3 = ["color2", "color0", "color1", "color4", "color3"];
    const colorOrder4 = ["color4", "color3", "color2", "color0", "color1"];
    const colorOrders = [colorOrder1, colorOrder2, colorOrder3, colorOrder4];
    let colorOrderValue = colorOrders[Math.floor(Math.random()*4)];
    let row = 1;
    
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

function copy(that) {
  const inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = that.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
}

