function changeText(button, newText) {
    button.classList.toggle("clicked");
    if (button.classList.contains("clicked")) {
      button.innerHTML = newText;
    } 
  }
  