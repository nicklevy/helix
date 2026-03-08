import './animation.js';
import { initTaxDeadlines } from './tax-deadlines.js';
import { initXeroTips } from './xero-tips.js';

document.addEventListener('DOMContentLoaded', () => {
  initTaxDeadlines();
  initXeroTips();
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hash = this.getAttribute('href');
        if (hash === '#') return;
        
        const target = document.querySelector(hash);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
            }
        }
    });
});

// Set Web3Forms dynamic redirect URL to match the current domain
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[name="redirect"]').forEach(input => {
    input.value = window.location.origin + '/success.html';
  });
});
