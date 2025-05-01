document.getElementById("magicBtn").addEventListener("click", function() {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "#4CAF50";
});

const galleryImages = document.querySelectorAll("#imageGallery img");
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
      img.style.border = "5px solid yellow";
  });
});

const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(content => content.style.display = "none");
      document.getElementById(`tab-${tab.dataset.tab}`).style.display = "block";
  });
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  if (!email.includes("@") || password.length < 8) {
      feedback.textContent = "Invalid email or password!";
      feedback.style.color = "red";
  } else {
      feedback.textContent = "You're good to go!";
      feedback.style.color = "lightgreen";
  }
});
