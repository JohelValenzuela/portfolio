// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event listener for header shadow and active nav items
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Header shadow
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    // Update active nav item based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').slice(1) === current) {
            a.classList.add('active');
        }
    });
});


// Animate skills cards on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});



(function() {
    // Inicializa EmailJS con tu Public Key
    emailjs.init("MNlg1SI1FtiWV0mgH");  // Tu public key

    // Escucha el envío del formulario
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();  // Evita el comportamiento predeterminado del formulario

      // Obtener los valores del formulario
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

     // Imprime los valores capturados para verificar
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);


      // Asegúrate de enviar los parámetros correctos
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message
      };
      
      console.log("Template Parameters:", templateParams); // Verifica que los datos están en el objeto templateParams
      
      console.log("Enviando correo con los siguientes parámetros:", templateParams);


      // Enviar el correo usando EmailJS
      emailjs.send('service_e4vnht9', 'template_i0s0wrd', templateParams)
        .then(function(response) {
        // document.getElementById('responseMessage').innerText = '¡Mensaje enviado exitosamente!';
        }, function(error) {
          document.getElementById('responseMessage').innerText = 'Hubo un error al enviar el mensaje';
          console.error('Error:', error);
        });
    });
  })();
  
    // Obtener los elementos del formulario, loader y mensaje
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
    const loader = document.querySelector('.loader');

    // Escuchar el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Evitar que el formulario se envíe inmediatamente

        // Mostrar el loader y el mensaje de "Enviando mensaje"
        loader.style.display = 'block';  // Mostrar el loader
        responseMessage.style.display = 'block';  // Mostrar el mensaje
        responseMessage.textContent = 'Enviando mensaje...';  // Texto del mensaje

        // Simular un retraso de 5 segundos (como si estuviera enviando el mensaje)
        setTimeout(function() {
            // Aquí va el código que debería ejecutarse al enviar el mensaje (por ejemplo, la llamada a EmailJS)
            
            // Simular que el mensaje se envió correctamente
            loader.style.display = 'none';  // Ocultar el loader
            responseMessage.textContent = '¡Mensaje enviado con éxito!';  // Cambiar el texto de la respuesta
            

            // Opcional: Limpiar el formulario o hacer otras acciones
            form.reset();
        }, 5000);  // 5000 milisegundos (5 segundos)

        setTimeout(function() {

            // Simular que el mensaje se envió correctamente
            loader.style.display = 'none';  // Ocultar el loader
            
            // Simular que el mensaje se envió correctamente
            responseMessage.style.display = 'none';  // Ocultar el responseMessage

            // Opcional: Limpiar el formulario o hacer otras acciones
            form.reset();
        }, 5000);  // 5000 milisegundos (5 segundos)
    });
    



    // DARK MODE

    document.addEventListener("DOMContentLoaded", () => {
        const themeToggleButton = document.getElementById("theme-toggle");
        const themeIcon = document.getElementById("theme-icon");
    
        function setTheme(theme) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
    
            // Cambiar el icono según el tema
            if (theme === "dark") {
                themeIcon.classList.replace("bxs-moon", "bxs-sun");
            } else {
                themeIcon.classList.replace("bxs-sun", "bxs-moon");
            }
        }
    
        // Detecta el tema guardado o el tema preferido del sistema
        const savedTheme = localStorage.getItem("theme");
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(prefersDarkScheme ? "dark" : "light");
        }
    
        // Alterna entre los temas claro y oscuro al hacer clic
        themeToggleButton.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme(newTheme);
        });
    });
    
    
    

  
  