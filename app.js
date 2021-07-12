function randomColor () {
    let colorValue = Math.floor(Math.random()*5);
    color = `color${colorValue}`;
}

function randomRotation () {
    let rotationValue = Math.floor(Math.random()*4);
    rotation = `rotation${rotationValue}`;
}

function addElement () {
    const shapeContainer = document.querySelector('.shapes')
    const newShape = document.createElement('div');

    randomColor();
    randomRotation();

    newShape.classList.add('base-shape', color, rotation);
    shapeContainer.appendChild(newShape);
}

for(let i = 0; i < 20; i++){
    addElement();
}