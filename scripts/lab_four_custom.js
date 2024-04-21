/* Accordion */


document.addEventListener('DOMContentLoaded', function () {
  var acc = document.getElementsByClassName("accordion-button");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});


/* Copyright Javascript */

document.getElementById("footer-year").textContent = new Date().getFullYear();
