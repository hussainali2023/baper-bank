document.getElementById('btn-login').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Please enter a valid email address and password to access baper bank')
        emailField.value = '';
        passwordField.value = '';
    }
   
})