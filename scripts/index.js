var animationItems = 8;
var artItems = 8;
var clothingItems = 8;
var homeItems = 6;
var illustrationItems = 73;
var paintItems = 73;

var modal = document.querySelector('#modal');
var homeButtons = document.querySelectorAll('.home');
var annimationButton = document.querySelector('#annimation');
var buttons = document.querySelectorAll('.button');
var mobileButtons = document.querySelectorAll('.mobileButton');

// Will load home images on page load
// Then changes images based on catagory clicked
function populate(selected) {

  if (selected === undefined) {
    let selected = 'home';
    let clicked = selected + 'Items';
    let i = eval(clicked);

    while ( i > 0) {
      let newImg = document.createElement('img');
      newImg.className = 'item';
      newImg.src = 'assets/' + selected + '/'  + selected + i + '.jpg';
      newImg.addEventListener('click', openModal);
      document.querySelector('#content').appendChild(newImg);
      i = i - 1;
    }
  } else if (selected === 'animation') {
      let clicked = selected + 'Items';
      // console.log(clicked);
      let i = eval(clicked);

      while ( i > 0) {
        let newVid = document.createElement('video');
        newVid.className = 'item';
        newVid.src = 'assets/' + selected + '/'  + selected + i + '.mp4';
        newVid.addEventListener('click', openModal);
        document.querySelector('#content').appendChild(newVid);
        i = i - 1;
      }
    } else {
        let clicked = selected + 'Items';
        let i = eval(clicked);

        while ( i > 0) {
          let newImg = document.createElement('img');
          newImg.className = 'item';
          if (clicked === 'clothingItems') {
            newImg.src = 'assets/' + selected + '/'  + selected + i + '.png';
          } else {
            newImg.src = 'assets/' + selected + '/'  + selected + i + '.jpg';
          }
          newImg.addEventListener('click', openModal);
          document.querySelector('#content').appendChild(newImg);
          i = i - 1;
        }
      }
}

// CHANGE PAGE TO CATAGORY CLICKED
function changeView(e) {
  var selected = e.target.id;

  const myNode = document.getElementById('content');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  populate(selected);
}

// OPEN MODAL CONTAINGING CLICKED IMAGE
function openModal(e) {
  var source = e.target.src;

  if (e.target.nodeName == 'IMG' ) {
    let elem = document.createElement('img');
    elem.src = source;
    elem.setAttribute('id', 'opened');
    modal.appendChild(elem);
  } else if (e.target.nodeName == 'VIDEO' ) {
    let elem = document.createElement('video');
    elem.src = source;
    elem.controls = true;
    elem.setAttribute('id', 'opened');
    modal.appendChild(elem);
  }

  modal.style.display = 'block';
}

// CLOSE MODAL AND REMOVES IMAGE
function closeModal() {
  modal.style.display = 'none';
  document.querySelector('#opened').remove();
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
  burger.classList.toggle('change');
}

// TOGGLE MOBILE NAV BAR
function toggleMobileNav() {
  var x = document.getElementById('mobileLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }

  burgerChange();
}

// CLOSE MOBILE NAV IF OPEN
function closeMobileNav() {
  var x = document.getElementById('mobileLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    burgerChange();
  }
}


// SET MODAL SIZE ON MOBILE
function modalSizing() {
  if (window.innerWidth < 500) {
    document.querySelector('#modal').style.height = window.innerHeight;
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', changeView);
}

for (var i = 0; i < mobileButtons.length; i++) {
  mobileButtons[i].addEventListener('click', toggleMobileNav);
}

for (var i = 0; i < homeButtons.length; i++) {
  homeButtons[i].addEventListener('click', returnHome);
}

document.querySelector('.burger').addEventListener('click', toggleMobileNav);
document.querySelector('.mobileLogo').addEventListener('click', closeMobileNav);

modal.addEventListener('click', closeModal);

// FUNCTIONS RUN ON PAGE LOAD
modalSizing();
populate();
