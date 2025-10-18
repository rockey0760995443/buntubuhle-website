
function sendMail(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const em = document.getElementById('email').value;
    const m = document.getElementById('message').value;
    
    if(!name || !em || !m) {
        alert('Please fill in all fields.');
        return;
    }

    const subj = encodeURIComponent('Website contact from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + em + '\n\n' + m);
    window.location.href = 'mailto:buntubuhleva@gmail.com?subject=' + subj + '&body=' + body;
}

// All navigation toggle logic has been removed to ensure links are always visible.

