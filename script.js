document.getElementById('one').addEventListener('click', function() {
    window.scrollTo({
        top: (document.querySelector('#home').offsetTop - 54),
        behavior: 'smooth'
    });
});
document.getElementById('two').addEventListener('click', function() {
    window.scrollTo({
        top: (document.querySelector('#a').offsetTop - 54),
        behavior: 'smooth'
    });
});
document.getElementById('three').addEventListener('click', function() {
    window.scrollTo({
        top: (document.querySelector('#c').offsetTop - 54),
        behavior: 'smooth'
    });
});
document.getElementById('four').addEventListener('click', function() {
    window.scrollTo({
        top: (document.querySelector('#p').offsetTop - 54),
        behavior: 'smooth'
    });
});
document.getElementById('five').addEventListener('click', function() {
    window.scrollTo({
        top: (document.querySelector('#r').offsetTop - 54),
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    const move = window.pageYOffset;
    document.querySelector('body').style.backgroundPositionY = move * 1.2 + 'px';
});

const qwertyuiop = document.querySelector('#eleven');
const asdfghjkl = document.querySelector('#twelve');
const zxcvbnm = document.querySelector('#thirteen');

document.getElementById('option-one').addEventListener('click', function() {
    qwertyuiop.style.display = 'block';
    asdfghjkl.style.display = 'none';
    zxcvbnm.style.display = 'none';
});
document.getElementById('option-two').addEventListener('click', function() {
    qwertyuiop.style.display = 'none';
    asdfghjkl.style.display = 'block';
    zxcvbnm.style.display = 'none';
});
document.getElementById('option-three').addEventListener('click', function() {
    qwertyuiop.style.display = 'none';
    asdfghjkl.style.display = 'none';
    zxcvbnm.style.display = 'block';
});

const canvas = document.getElementById('sprite');
const ctx = canvas.getContext('2d');
const sprite = new Image();
sprite.src = 'images/pixilart-sprite.png';
const spriteWidth = 39;
const spriteHeight = 40;


function spriteStarter(frameX, frameY, destX, destY) {
    const animeX = frameX * (spriteWidth);
    const animeY = frameY * (spriteHeight);
    ctx.drawImage(sprite, animeX, animeY, spriteWidth, spriteHeight, destX - spriteWidth / 2, destY - spriteHeight / 2, spriteWidth, spriteHeight);
}

sprite.onload = function() {
  let frameX = 0;
  let cD = 'idle';
  let frameIndex = 0;
  const frameMap = {
    left: [2, 3],
    right: [1, 4],
    idle: [5]
  };
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const frames = frameMap[cD];
    const frameX = frames[frameIndex % frames.length];
    spriteStarter(frameX, 0, canvas.width / 2, canvas.height / 2);
    frameIndex++;
  }, 100);
  document.addEventListener('mousemove', function(event) {
    const dir = canvas.getBoundingClientRect();
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    if (cursorX < dir.left) {
      cD = "left";
    } else if (cursorX > dir.right) {
      cD = "right";
    } else if (cursorX > dir.right) {
      cD = "right";
    }
    else {
      cD = "idle";
    }
  });
}

let projectIndex = 0;
let timeStop;

function currentSlide(image) {
    clearTimeout(timeStop);
    projectIndex = image;
    showSlides(true);
  }

function showSlides(man = false) {
  let i;
  let games = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");

    if (projectIndex > games.length) {
      projectIndex = 1;
    }

  for (i = 0; i < games.length; i++) {
    games[i].style.display = "none";
  }
  if (!man) {
    projectIndex++;
  }
  if (projectIndex > games.length) {projectIndex = 1}
  games[projectIndex-1].style.display = "block";
  for (i = 0; i < dots.length; i++) {
    if (dots[i].className.includes("active")) {
      dots[i].className = dots[i].className.replace("active", "");
    }
}
  dots[projectIndex-1].className += " active";
  clearTimeout(timeStop);
  timeStop = setTimeout( () => showSlides(false), 2000);
}

showSlides();