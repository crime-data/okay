
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'light') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    const DISCORD_USER_ID = '1360653904051966124';

    const statusText = document.getElementById('listening-text');
    const spotifyIcon = document.querySelector('.spotify-icon');
    const statusDot = document.querySelector('.status-indicator');

    // Game Status Elements
    const gameStatusDiv = document.querySelector('.game-status');
    const gameText = document.getElementById('game-text');

    // Loading Screen Logic
    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loading-screen');
        // Optional: Small delay to ensure animations feel smooth
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    });

});