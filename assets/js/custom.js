
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const techCards = document.querySelectorAll('.tech-card');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            const selectedCategory = this.dataset.category;
            
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');

            techCards.forEach(card => {
                if (selectedCategory === 'all' || card.dataset.categories.includes(selectedCategory)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // team 
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        const card = member.querySelector('.member-card');

        member.addEventListener('mouseenter', function() {
            card.style.transform = 'rotateY(180deg)';
        });

        member.addEventListener('mouseleave', function() {
            card.style.transform = 'rotateY(0deg)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
const header = document.querySelector('.bhives-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navButtons = document.querySelector('.nav-buttons');
const progressBar = document.getElementById("myBar");

// Sticky header
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    
    // Update progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    if (menuToggle.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    // Move nav buttons into the mobile menu when it's active
    if (navLinks.classList.contains('active')) {
        navLinks.appendChild(navButtons);
    } else {
        header.querySelector('.bhives-nav').appendChild(navButtons);
    }
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        header.querySelector('.bhives-nav').appendChild(navButtons);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current section in navbar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});
});
document.addEventListener('DOMContentLoaded', function() {
    const reasonNavItems = document.querySelectorAll('.reason-nav-item');
    const reasonDetails = document.querySelectorAll('.reason-detail');

    reasonNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const reason = this.getAttribute('data-reason');
            
            reasonNavItems.forEach(navItem => navItem.classList.remove('active'));
            reasonDetails.forEach(detail => detail.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(reason).classList.add('active');
        });
    });
});

function scheduleSession() {
    const email = document.querySelector('.cta-form input[type="email"]').value;
    if (email) {
        alert(`Thank you! We'll contact you at ${email} to schedule your free AI strategy session.`);
        // Here you would typically send this data to your backend
    } else {
        alert('Please enter your email address.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle the clicked item
            item.classList.toggle('active', !isActive);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would typically send this data to your backend
        console.log('Form submitted:', formValues);
        
        // Show a success message
        alert('Thank you for your interest! We will contact you shortly to confirm your AI strategy session.');
        
        // Reset the form
        this.reset();
    });

    // Set minimum date for the date picker (today)
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('preferred-date').setAttribute('min', today);

    // Add touch-friendly hover effect to info cards for mobile
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll for mobile
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        const hexagons = document.querySelectorAll('.hexagon');
        
        hexagons.forEach(hexagon => {
            hexagon.addEventListener('mouseover', () => {
                hexagon.style.transform = 'scale(1.1) translateY(-10px)';
                hexagon.style.backgroundColor = '#FF8C00';
            });
            
            hexagon.addEventListener('mouseout', () => {
                hexagon.style.transform = 'scale(1) translateY(0)';
                hexagon.style.backgroundColor = '';
            });
        });
    });
  

    document.addEventListener('DOMContentLoaded', function() {
        // 3D Honeycomb Background
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('bhives-honeycomb-3d').appendChild(renderer.domElement);
    
        const geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 6);
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.1 });
    
        for (let i = 0; i < 50; i++) {
            const honeycomb = new THREE.Mesh(geometry, material);
            honeycomb.position.x = Math.random() * 10 - 5;
            honeycomb.position.y = Math.random() * 10 - 5;
            honeycomb.position.z = Math.random() * 10 - 5;
            scene.add(honeycomb);
        }
    
        camera.position.z = 5;
    
        function animate() {
            requestAnimationFrame(animate);
            scene.rotation.x += 0.001;
            scene.rotation.y += 0.001;
            renderer.render(scene, camera);
        }
        animate();
    
        // Typewriter effect
        const typewriterElement = document.querySelector('.bhives-typewriter');
        const words = JSON.parse(typewriterElement.getAttribute('data-words'));
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typewriterDelay = 100;
    
        function typeWriter() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
    
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typewriterDelay = 1000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typewriterDelay = 500; // Pause before starting new word
            } else {
                typewriterDelay = isDeleting ? 50 : 100;
            }
    
            setTimeout(typeWriter, typewriterDelay);
        }
    
        typeWriter();
    
        // AI Concept Explorer
        const conceptNodes = document.querySelectorAll('.bhives-concept-node');
        const conceptDetails = document.getElementById('bhives-concept-details');
    
        conceptNodes.forEach((node, index) => {
            const angle = (index / conceptNodes.length) * Math.PI * 2;
            const radius = 120;
            node.style.left = `${Math.cos(angle) * radius + 150}px`;
            node.style.top = `${Math.sin(angle) * radius + 150}px`;
    
            node.addEventListener('click', () => {
                const concept = node.getAttribute('data-concept');
                conceptDetails.innerHTML = `<h3>${concept}</h3><p>Learn more about ${concept} and how it can transform your business.</p>`;
            });
        });
    });
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Here you would typically send the email to your server
            alert(`Thank you for subscribing with ${email}! You'll receive our latest AI insights soon.`);
            this.reset();
        });
        
        // Animate social icons on hover
        document.querySelectorAll('.social-icons a').forEach(icon => {
            icon.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-3px)';
            });
            icon.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const backToTopButton = document.getElementById('back-to-top');
            const modal = document.getElementById('contactModal');
            const openModalBtn = document.getElementById('openContactModal');
            const closeModalBtn = document.getElementsByClassName('close')[0];
            const contactForm = document.getElementById('contactForm');
        
            // Back to Top functionality
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });
        
            backToTopButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        
            // Modal functionality
            openModalBtn.onclick = function() {
                modal.style.display = "block";
            }
        
            closeModalBtn.onclick = function() {
                modal.style.display = "none";
            }
        
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        
            // Contact form submission
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // Here you would typically send the form data to your server
                alert('Thank you for your message. We will get back to you soon!');
                contactForm.reset();
                modal.style.display = "none";
            });
        
            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                // Here you would typically send the email to your server
                alert(`Thank you for subscribing with ${email}! You'll receive our latest AI insights soon.`);
                this.reset();
            });
        
            // Animate social icons on hover
            document.querySelectorAll('.social-icons a').forEach(icon => {
                icon.addEventListener('mouseover', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                icon.addEventListener('mouseout', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        
            // Smooth scroll for footer links
            document.querySelectorAll('.footer-section.links a, .footer-nav a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        
            // Lazy loading for footer logo
            const footerLogo = document.querySelector('.footer-logo');
            if ('IntersectionObserver' in window) {
                const lazyImageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const lazyImage = entry.target;
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });
        
                lazyImageObserver.observe(footerLogo);
            } else {
                // Fallback for browsers that don't support IntersectionObserver
                footerLogo.src = footerLogo.dataset.src;
            }
        
            // Add animation to contact info icons
            const contactIcons = document.querySelectorAll('.footer-section.contact i');
            contactIcons.forEach(icon => {
                icon.addEventListener('mouseover', function() {
                    this.style.transform = 'rotate(15deg)';
                });
                icon.addEventListener('mouseout', function() {
                    this.style.transform = 'rotate(0deg)';
                });
            });
 
  
        });

        document.addEventListener('DOMContentLoaded', function() {
            const loadingScreen = document.getElementById('loading-screen');
            const hexOutline = document.querySelector('.hex-outline');
            const innerHex = document.querySelector('.inner-hex');
            const centralNode = document.querySelector('.central-node');
            const loadingText = document.querySelector('.loading-text');
        
            // Set initial states
            gsap.set(hexOutline, { drawSVG: "0%" });
            gsap.set(innerHex, { scale: 0.8, opacity: 0 });
            gsap.set(centralNode, { scale: 0, opacity: 0 });
        
            // Create timeline
            const tl = gsap.timeline({ repeat: -1 });
        
            // Animate hexagon outline
            tl.to(hexOutline, { duration: 2, drawSVG: "100%", ease: "power2.inOut" })
              // Animate inner hexagon
              .to(innerHex, { duration: 1, scale: 1, opacity: 0.3, ease: "back.out(1.7)" }, "-=0.5")
              // Animate central node
              .to(centralNode, { duration: 0.5, scale: 1, opacity: 1, ease: "back.out(1.7)" })
              // Create and animate network nodes
              .call(() => createNetworkNodes(), null, "-=0.3")
              // Animate text
              .to(loadingText, { duration: 1, opacity: 1, ease: "power2.out" }, "-=1")
              // Hold the final state
              .to({}, { duration: 1 });
        
            function createNetworkNodes() {
                const numNodes = 12;
                const radius = 80;
        
                for (let i = 0; i < numNodes; i++) {
                    const angle = (i / numNodes) * Math.PI * 2;
                    const x = 150 + Math.cos(angle) * radius;
                    const y = 150 + Math.sin(angle) * radius;
        
                    const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    node.setAttribute("class", "node");
                    node.setAttribute("cx", x);
                    node.setAttribute("cy", y);
                    node.setAttribute("r", "4");
                    node.setAttribute("fill", "#FFFFFF");
        
                    const connection = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    connection.setAttribute("class", "connection");
                    connection.setAttribute("x1", "150");
                    connection.setAttribute("y1", "150");
                    connection.setAttribute("x2", x);
                    connection.setAttribute("y2", y);
                    connection.setAttribute("stroke", "#FFFFFF");
                    connection.setAttribute("stroke-width", "1");
        
                    document.querySelector('.ai-elements').appendChild(connection);
                    document.querySelector('.ai-elements').appendChild(node);
        
                    gsap.from(node, {
                        duration: 0.5,
                        scale: 0,
                        opacity: 0,
                        ease: "back.out(1.7)",
                        delay: i * 0.1
                    });
        
                    gsap.from(connection, {
                        duration: 0.5,
                        attr: { x2: 150, y2: 150 },
                        ease: "power2.out",
                        delay: i * 0.1
                    });
                }
            }
        
            // Simulate loading time (remove this in production and use real load event)
            setTimeout(() => {
                gsap.to(loadingScreen, {
                    duration: 0.5,
                    opacity: 0,
                    visibility: "hidden",
                    onComplete: () => {
                        loadingScreen.style.display = 'none';
                    }
                });
            }, 8000); // Adjust this time as needed
        });
        
        // Add this to your existing window.onload function or create a new one
        window.addEventListener('load', function() {
            const loadingScreen = document.getElementById('loading-screen');
            gsap.to(loadingScreen, {
                duration: 0.5,
                opacity: 0,
                visibility: "hidden",
                onComplete: () => {
                    loadingScreen.style.display = 'none';
                }
            });
        });