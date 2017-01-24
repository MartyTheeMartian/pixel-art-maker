// mainDiv, housing the pixel elements
var mainDiv = document.createElement("div");
mainDiv.style.class = "main";
document.body.appendChild(mainDiv);

// Event Listener for pixel color change, dragging effect
var mouseCon = false;
mainDiv.addEventListener("mousedown", function (event) {
  event.target.style.backgroundColor = `${color}`;
  mouseCon = true;
});
mainDiv.addEventListener("mouseover", function (event) {
  if (mouseCon) {
    event.target.style.backgroundColor = `${color}`;
  }
});
mainDiv.addEventListener("mouseup", function (event) {
  event.target.style.backgroundColor = `${color}`;
  mouseCon = false;
});

// Empty pixel grid
for (i = 0; i < 1200; i++) {
  var divEl = document.createElement("div");
  divEl.style.class = "pixel";
  divEl.style.height = "1%";
  divEl.style.padding = "1%";
  divEl.style.outline = "1px solid LightGrey";
  divEl.style.float = "left";
  mainDiv.appendChild(divEl);
}

// colorDiv for housing color picker
var colorDiv = document.createElement("div");
colorDiv.style.class = "color";
colorDiv.style.border = "3px solid black";
colorDiv.style.padding = "10px";
colorDiv.style.position = "fixed";
colorDiv.style.bottom = "2%";
document.body.appendChild(colorDiv);

// "Current Color: " Text
var divCur = document.createElement("div");
divCur.innerText = "Click To Choose Your Color: ";
divCur.style.font = "24px Tahoma";
divCur.style.float = "left";
colorDiv.appendChild(divCur);

// Color Picker
var color = "black";  // Default color
var inputColor = document.createElement("input");
inputColor.type = "color";
inputColor.style.padding = "6px";
inputColor.style.marginLeft = "20px";
colorDiv.appendChild(inputColor);
inputColor.addEventListener("change", function() {
  color = event.target.value;
});

// Reset Button, resets the entire grid to white
var btn = document.createElement("button");
btn.innerHTML = "Reset Grid";
btn.style.padding = "11px";
btn.style.marginLeft = "40px";
colorDiv.appendChild(btn);
btn.addEventListener("click", function() {
  for (j = 0; j < mainDiv.children.length; j++) {
    mainDiv.children[j].style.backgroundColor = "white";
  }
});
