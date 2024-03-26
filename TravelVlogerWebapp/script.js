let navBtn = document.querySelector('#navBtn');
let loginPopup = document.querySelector('.loginpopup-bg');
let crossmark = document.querySelector('.crossmark');

navBtn.addEventListener('click', () => {
    loginPopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

crossmark.addEventListener('click', () => {
    loginPopup.style.display = 'none';
    document.body.style.overflow = '';
});
