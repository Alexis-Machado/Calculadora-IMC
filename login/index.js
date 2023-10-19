// Agrega/Remueve la clase 'active' al hacer clic en el enlace de registro/inicio de sesión
const loginsec = document.querySelector('.login-section')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
registerlink.addEventListener('click', () => {
    loginsec.classList.add('active')
})

loginlink.addEventListener('click', ()=> {
    loginsec.classList.remove('active')
})