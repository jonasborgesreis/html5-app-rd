document.getElementById("myBtn").addEventListener("click", function(event){

    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    
    if (email){
        if (password.length >= 5){
            event.preventDefault();
            localStorage.setItem('mocky', 'http://www.mocky.io/v2/5dba68fb3000007400028eb5');
            window.location.href = 'list-user.html';
        } else {
            event.preventDefault();
            document.getElementById("password").focus();
            alert('Dados incorretos!');
        }
    }

  });