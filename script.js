document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting The Demand Hub! We'll get back to you soon.");
  this.reset();
});