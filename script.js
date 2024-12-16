// Smooth scrolling untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animasi muncul saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Mengamati semua section dan project-card
document.querySelectorAll('section, .project-card').forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Animasi typing effect untuk hero text
const heroText = document.querySelector('.hero p');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Mulai animasi typing setelah halaman dimuat
window.addEventListener('load', typeWriter);

// Tambahkan efek hover pada navigation
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animasi tombol saat submit
    const button = this.querySelector('button');
    button.innerHTML = '✨ Terkirim! ✨';
    button.style.backgroundColor = '#ff1493';
    
    // Reset form setelah 2 detik
    setTimeout(() => {
        this.reset();
        button.innerHTML = 'Kirim';
        button.style.backgroundColor = '';
    }, 2000);
});

// Tambahkan efek parallax pada hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    heroImage.style.transform = `translateY(${scrolled * 0.4}px)`;
});

// Tambahkan loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
