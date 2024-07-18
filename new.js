

function Formvalidation() {

    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
   
    document.getElementById('message-error').textContent = '';

 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const message = document.getElementById('message').value.trim();

    let isValid = true;


    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
    }

   
    return isValid;
}
