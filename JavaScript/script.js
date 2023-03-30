
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');
const Login_btn = document.querySelector('#login_btn');
const close_btn = document.querySelector('.close_icon');
const home = document.querySelector('.home');

registerLink.addEventListener('click', ()=> 
{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> 
{
    wrapper.classList.remove('active');
})

Login_btn.addEventListener('click', ()=>
{
    wrapper.classList.add('active-popup');
    home.classList.add('active');
    
})

close_btn.addEventListener('click', ()=>
{
    wrapper.classList.remove('active-popup');
    home.classList.remove('active');
})