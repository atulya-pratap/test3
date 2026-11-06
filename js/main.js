document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enter-btn');
    const entranceSection = document.getElementById('grand-entrance');
    const mainArchive = document.getElementById('main-archive');
    const mobileNav = document.getElementById('mobile-nav');

    // Handle the cinematic entrance
    enterBtn.addEventListener('click', () => {
        // Animate entrance out
        entranceSection.classList.add('fade-out-up');
        
        setTimeout(() => {
            entranceSection.classList.add('hidden');
            
            // Reveal main archive and navigation
            mainArchive.classList.remove('hidden');
            mobileNav.classList.remove('hidden');
            
            // Smooth scroll to top of profile
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1000); // Wait for the CSS transition
    });

    // Simple scroll spy for bottom navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
});
