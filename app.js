function toggleDarkMode() {
    var header = document.querySelector('header');
    var body = document.querySelector('body');

    header.classList.toggle('dark-theme-header');
    [...document.querySelectorAll('.logo, .card-followers-number, .overview-header, .page-views-number, .page-likes-number, .page-retweets-number, .attribution')].forEach(i => i.classList.toggle('dark-theme-text'));
    body.classList.toggle('dark-theme-background');
    [...document.querySelectorAll('.card, .overview-card')].forEach(i => i.classList.toggle('dark-theme-card'));
    [...document.querySelectorAll('.card-nickname, .total-followers, .dark-mode-label, .card-followers-description, .page-views, .page-likes, .page-retweets')].forEach(i => i.classList.toggle('dark-theme-gray-text'));
}