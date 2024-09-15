let textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event ) => {
  const inputArray = Array.from(event.currentTarget.value);
  const isAllSpace = inputArray.every(char => char === " ");

  if (event.currentTarget.value === "" || isAllSpace ) {
    textOutput.textContent = "Anonymous";
  }
  else {
    textOutput.textContent = event.currentTarget.value.trim()
  }
  
});
