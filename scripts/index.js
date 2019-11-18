console.log('js linked');

var modal = document.querySelector('#modal');
var homeitems = document.querySelectorAll('.homeitem');
var items = document.querySelectorAll('.item');
var annimationButton = document.querySelector('#annimation');
var buttons = document.querySelectorAll('.button');


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

// EVENT LISTENERS
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', openModal);
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changeView);
}

document.querySelector('.home').addEventListener('click', returnHome);
document.querySelector('.name').addEventListener('click', returnHome);

modal.addEventListener("click", closeModal);
