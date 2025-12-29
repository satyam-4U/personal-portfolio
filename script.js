// Typing animation
const roles = ["Web Developer", "JavaScript Developer", "Frontend Engineer"];
let i = 0, j = 0;

function typing() {
  if (j < roles[i].length) {
    document.getElementById("typing").textContent += roles[i][j];
    j++;
    setTimeout(typing, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (j > 0) {
    document.getElementById("typing").textContent = roles[i].substring(0, j - 1);
    j--;
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % roles.length;
    setTimeout(typing, 500);
  }
}

typing();

// EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name.value,
    email: email.value,
    message: message.value,
  }).then(() => {
    alert("Message sent successfully!");
    this.reset();
  });
});
