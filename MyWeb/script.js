const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// dark mode toggle
var sunToggle=document.getElementById("sunToggle");

sunToggle.onclick= function(){
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")){
    sunToggle.src="images/moon.png";
  }else{
    sunToggle.src="images/sun.png";
  }
}
