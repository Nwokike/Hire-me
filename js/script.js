document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
        });
    });

    // Update year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    });
