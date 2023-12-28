document.getElementById('menu-icon').addEventListener('click', function() {
  var navLinks = document.querySelector('.nav_links');
  navLinks.classList.toggle('show');
});

// PopUp Image


// Función para mostrar el popup al hacer clic en la imagen
document.getElementById('imagenPopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'flex';
});

// Función para cerrar el popup al hacer clic en la "X"
document.getElementById('cerrar').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});



// PopUp Card1

    // Función para mostrar el popup al hacer clic en la card
    document.getElementById('cardPopup1').addEventListener('click', function() {
      document.getElementById('popupc1').style.display = 'flex';
    });


    // Función para cerrar el popup al hacer clic en la "X"
    document.getElementById('cerrarc1').addEventListener('click', function() {
      document.getElementById('popupc1').style.display = 'none';
    });

    


// PopUp Card2

    // Función para mostrar el popup al hacer clic en la card
    document.getElementById('cardPopup2').addEventListener('click', function() {
      document.getElementById('popupc2').style.display = 'flex';
    });


    // Función para cerrar el popup al hacer clic en la "X"
    document.getElementById('cerrarc2').addEventListener('click', function() {
      document.getElementById('popupc2').style.display = 'none';
    });

// PopUp Card3

    // Función para mostrar el popup al hacer clic en la card
    document.getElementById('cardPopup3').addEventListener('click', function() {
      document.getElementById('popupc3').style.display = 'flex';
    });


    // Función para cerrar el popup al hacer clic en la "X"
    document.getElementById('cerrarc3').addEventListener('click', function() {
      document.getElementById('popupc3').style.display = 'none';
    });



