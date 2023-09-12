document.getElementById('lofinForm').addEventListener('submit', function (e) {
    e.preventDefault();

    //get the values entered by user
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    //add validation

    if (username === 'yourusername' && password === 'yourpassword') {
        alert('Login successful');

    }
    else {
        alert('login faild.please check your username or password');

    }

});