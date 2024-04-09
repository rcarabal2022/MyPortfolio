let menushow = false;
// function show or hide menu
function showhideshow() {
  if (menushow) {
    document.getElementById("nav").classList = "";
    menushow = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menushow = true;
  }
}
// Hide menu when select one option
function select() {
  document.getElementById("nav").classList = "";
  menushow = false;
}

//  skills Animation
function effectskills() {
  var skills = document.getElementById("skills");
  var distanc_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distanc_skills >= 300) {
    let skill2 = document.getElementsByClassName("progress");
    skill2[0].classList.add("javascript");
    skill2[1].classList.add("htmlcss");
    skill2[2].classList.add("python");
    skill2[3].classList.add("sql");
    skill2[4].classList.add("r");
    skill2[5].classList.add("atencion");
    skill2[6].classList.add("trabajo");
    skill2[7].classList.add("comunicacion");
    skill2[8].classList.add("pensamiento");
    skill2[9].classList.add("dedicacion");
  }
}

// Detect scrooling to apply bar skills

window.onscroll = function () {
  effectskills();
};
