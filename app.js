function toggleMenu() {
    var login = document.querySelector('.sample');
    login.classList.toggle("visible");
    var user = document.querySelector('.fa-user');
    user.style.color = (user.style.color === 'black') ? 'white' : 'black';
    
}