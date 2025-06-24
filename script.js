function toggleTheme() {
  const body = document.body;

  body.classList.toggle("light");
  body.classList.toggle("dark");

  const img = document.querySelector(".profile");

  if(body.classList.contains("light")) {
    img.setAttribute("src", "./images/fotoL.jpg");
  } else {
    img.setAttribute("src", "./images/fotoD.png");
  }
}