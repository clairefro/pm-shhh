// any js for popup goes here
console.log("yo from script.js");

const checkbox = document.getElementById("toggleCensorCheckbox");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    console.log("checked");
  } else {
    console.log("unchecked");
  }
});
