        // Menu ely ambony io
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            if(!menuOpen) {
                menuBtn.classList.add('open');
                navLinks.classList.add('active');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('active');
                menuOpen = false;
            }
        });

        // Famodiagna menu kafa mikitiky lien
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('active');
                menuOpen = false;
            });
        });

     
          

        // Fietsiketsegna (animation)
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card, .project-card, .about-text').forEach(el => {
            observer.observe(el);
        });

        // Config
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });

        // Contact
         document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            //joaby
            
            alert('Message envoyé ! Je vous répondrai bientôt.');
            this.reset();
        });
    