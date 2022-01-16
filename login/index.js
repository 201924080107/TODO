let username = 'admin';
let password = '123456';
const button1 = document.querySelector('.button1');
button1.addEventListener('click',function(){
    const input_list = document.querySelectorAll('#login input');
    if(input_list[0].value === username && 
        input_list[1].value === password){
            window.location = '../subway/index.html';
        }
});
const li_left = document.querySelector('#loginButton');
const li_right = document.querySelector('#registerButton');
const section_left = document.querySelector('#login');
const section_right = document.querySelector('#register');
li_left.addEventListener('click',function(){
    section_left.style.display = 'block';
    section_right.style.display = 'none';
    li_left.style.borderBottom = '2px solid #fff';
    li_right.style.borderBottom = 'none';
});
li_right.addEventListener('click',function(){
    section_left.style.display = 'none';
    section_right.style.display = 'block';
    li_right.style.borderBottom = '2px solid #fff';
    li_left.style.borderBottom = 'none';
});