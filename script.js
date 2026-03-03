const modeBtn = document.getElementById("modeBtn");
const emailBtn = document.getElementById("emailBtn");
const emailBox = document.getElementById("emailBox");

function setTheme(isDark) {
  if (isDark === true) {
    document.body.classList.add("dark");
    if (modeBtn) {
      modeBtn.textContent = "Light Mode";
    }
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    if (modeBtn) {
      modeBtn.textContent = "Dark Mode";
    }
    localStorage.setItem("theme", "light");
  }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  setTheme(true);
} else {
  setTheme(false);
}

if (modeBtn) {
  modeBtn.addEventListener("click", function () {

    if (document.body.classList.contains("dark")) {
      setTheme(false);
    } else {
      setTheme(true);
    }

  });
}

if (emailBtn && emailBox) {
  emailBtn.addEventListener("click", function () {

    if (emailBox.style.display === "block") {
      emailBox.style.display = "none";
    } else {
      emailBox.style.display = "block";
    }

  });
}