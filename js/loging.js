document.getElementById('user-btn').addEventListener('click', function(){
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    const passField=document.getElementById('user-password');
    const userPassword= passField.value;
    if(userEmail=='sontan@baap.com' && userPassword=='secret'){
        window.location.href='anader.html';
    }
})