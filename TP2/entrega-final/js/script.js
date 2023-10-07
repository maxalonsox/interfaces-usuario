/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

const dropdown = document.querySelector('.dropdown');
const overlay = document.getElementById('overlay');

const toggleDropdown = () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        overlay.style.display = 'none'; // Oculta el overlay al cerrar el dropdown
    } else {
        dropdownContent.style.display = 'block';
        overlay.style.display = 'block'; // Muestra el overlay al abrir el dropdown
    }
};

dropdown.addEventListener('click', toggleDropdown);


// JavaScript para habilitar el desplazamiento táctil del slider
const slider = document.querySelector('.slider');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
const cardWidth = 310; // Ancho de cada tarjeta

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX;
  slider.style.transition = 'none';
  cancelAnimationFrame(animationID);
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentTranslate !== 0) {
    slideRight();
  } else if (movedBy > 100 && currentTranslate !== -((document.querySelectorAll('.card-grande').length - 1) * cardWidth)) {
    slideLeft();
  } else {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }

  slider.style.transition = 'transform 0.3s ease-in-out';
  requestAnimationFrame(slide);
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const currentPosition = e.clientX;
  currentTranslate = prevTranslate + currentPosition - startPosition;
  slider.style.transform = `translateX(${currentTranslate}px)`;
  animationID = requestAnimationFrame(slide);
});

function slide() {
  slider.style.transform = `translateX(${currentTranslate}px)`;

  if (isDragging) {
    requestAnimationFrame(slide);
  }
}

function slideLeft() {
  if (currentTranslate === 0) return;
  prevTranslate = currentTranslate;
  currentTranslate += cardWidth;
  if (currentTranslate > 0) currentTranslate = 0;
  animationID = requestAnimationFrame(slide);
}

function slideRight() {
  const maxTranslate = -((document.querySelectorAll('.card-grande').length - 1) * cardWidth);
  if (currentTranslate === maxTranslate) return;
  prevTranslate = currentTranslate;
  currentTranslate -= cardWidth;
  if (currentTranslate < maxTranslate) currentTranslate = maxTranslate;
  animationID = requestAnimationFrame(slide);
}

// JavaScript para habilitar el carrusel con soporte táctil y botones en todos los carruseles
const carouselContainers = document.querySelectorAll('.carousel-container');

carouselContainers.forEach((container) => {
    const carousel = container.querySelector('.carousel');
    const prevButton = container.querySelector('.carousel-button.prev');
    const nextButton = container.querySelector('.carousel-button.next');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    nextButton.addEventListener('click', () => {
        const cardWidth = 200; // Ancho de la tarjeta + margen
        const maxTranslate = -1250;
        
        if (currentTranslate > maxTranslate) {
            currentTranslate -= 258;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentTranslate !== 0) {
            currentTranslate += 258; // Ancho de la tarjeta + margen
            updateCarousel();
        }
    });

    carousel.addEventListener('touchstart', (e) => {
        isDragging = true;
        startPosition = e.touches[0].clientX;
        carousel.style.transition = 'none';
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentPosition = e.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPosition;
    });

    carousel.addEventListener('touchend', () => {
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;
        const cardWidth = 200; // Ancho de la tarjeta + margen
        const maxTranslate = -(carousel.querySelectorAll('.card').length - 1) * cardWidth;

        if (movedBy < -100 && currentTranslate > maxTranslate) {
            currentTranslate -= cardWidth;
        } else if (movedBy > 100 && currentTranslate !== 0) {
            currentTranslate += cardWidth;
        }

        updateCarousel();
    });

    function updateCarousel() {
        const cardWidth = 200; // Ancho de la tarjeta + margen
        const maxTranslate = -(carousel.querySelectorAll('.card').length - 1) * cardWidth;
        if (currentTranslate > 0) currentTranslate = 0;
        if (currentTranslate < maxTranslate) currentTranslate = maxTranslate;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        carousel.style.transition = 'transform 0.3s ease-in-out';
    }
});

// JavaScript para habilitar el carrusel con soporte táctil
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    carousel.addEventListener('touchstart', (e) => {
        isDragging = true;
        startPosition = e.touches[0].clientX;
        carousel.style.transition = 'none';
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const currentPosition = e.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPosition;
    });

    carousel.addEventListener('touchend', () => {
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && currentTranslate !== 0) {
            slideRight();
        } else if (movedBy > 100 && currentTranslate !== -((carousel.querySelectorAll('.card').length - 1) * 200)) {
            slideLeft();
        } else {
            carousel.style.transform = `translateX(${currentTranslate}px)`;
        }

        carousel.style.transition = 'transform 0.3s ease-in-out';
    });

    function slideLeft() {
        if (currentTranslate === 0) return;
        prevTranslate = currentTranslate;
        currentTranslate += 200; // Ancho de la tarjeta + margen
        if (currentTranslate > 0) currentTranslate = 0;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        carousel.style.transition = 'transform 0.3s ease-in-out';
    }

    function slideRight() {
        const maxTranslate = -((carousel.querySelectorAll('.card').length - 1) * 200);
        if (currentTranslate === maxTranslate) return;
        prevTranslate = currentTranslate;
        currentTranslate -= 200; // Ancho de la tarjeta + margen
        if (currentTranslate < maxTranslate) currentTranslate = maxTranslate;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        carousel.style.transition = 'transform 0.3s ease-in-out';
    }
});
