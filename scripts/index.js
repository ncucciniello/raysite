console.log('js linked');

var modal = document.querySelector('#modal');
var homeitems = document.querySelectorAll('.homeitem');
var items = document.querySelectorAll('.item');
var annimationButton = document.querySelector('#annimation');
var buttons = document.querySelectorAll('.button');
var mobileButtons = document.querySelectorAll('.mobileButton');


// OPEN MODAL CONTAINGING CLICKED IMAGE
function openModal(e) {
  var source = e.target.src;

  if (e.target.nodeName == 'IMG' ) {
    let elem = document.createElement("img");
    elem.src = source;
    elem.setAttribute("id", "opened");
    modal.appendChild(elem);
  } else if (e.target.nodeName == 'VIDEO' ) {
    let elem = document.createElement("video");
    elem.src = source;
    elem.controls = true;
    elem.setAttribute("id", "opened");
    modal.appendChild(elem);
  }

  modal.style.display = 'block';
}

// CLOSE MODAL AND REMOVES IMAGE
function closeModal() {
  modal.style.display = 'none';
  document.querySelector('#opened').remove();
}

// CHANGE PAGE TO CATAGORY CLICKED
function changeView(e) {
  var selected = document.querySelectorAll('.' + e.target.id);

  for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }

  for (var i = 0; i < selected.length; i++) {
    selected[i].style.display = 'block';
  }
}

// RESTORE PAGE TO 'HOME' VIEW
function returnHome(){
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }

  for (var i = 0; i < homeitems.length; i++) {
    homeitems[i].style.display = 'block';
  }
}

// Hamburger FUNCTION
function burgerChange() {
  let burger = document.querySelector('.burger')
  burger.classList.toggle("change");
}

// TOGGLE MOBILE NAV BAR
function toggleMobileNav() {
  var x = document.getElementById("mobileLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  burgerChange();
}

// CLOSE MOBILE NAV IF OPEN
function closeMobileNav() {
  var x = document.getElementById("mobileLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    burgerChange();
  }
}


// SET MODAL SIZE ON MOBILE
function modalSizing() {
  if (window.innerWidth < 500) {
    document.querySelector('#modal').style.height = window.innerHeight;
  }
}




// EVENT LISTENERS
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', openModal);
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changeView);
}

for (var i = 0; i < mobileButtons.length; i++) {
    mobileButtons[i].addEventListener('click', toggleMobileNav);
}

document.querySelector('.home').addEventListener('click', returnHome);
document.querySelector('.name').addEventListener('click', returnHome);
document.querySelector('.burger').addEventListener('click', toggleMobileNav);
document.querySelector('.mobileLogo').addEventListener('click', closeMobileNav);

modal.addEventListener("click", closeModal);

// FUNCTIONS RUN ON PAGE LOAD
modalSizing();
