document.body.onload = addElement;

function addElement () {
  const newDiv = document.createElement("div");

  const newContent = document.createTextNode("Hi there and greetings!");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("shapes");
  document.body.insertBefore(newDiv, currentDiv);
}