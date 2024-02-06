'use strict'

class User {
    constructor (username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    login (username, password){
        //validar usuario y contrasena
        if (username===this.username && this.password===password){
            alert('Bienvenido');
        }else{
            alert('OOOooooppppsssIII!!!');
        }
    }
    resetPassword (newPassword){
        this.password = newPassword;
        alert('Cambio de contraseña exitoso')
    }
    updateInfo (newEmail){
        this.email=newEmail;
        alert('Cambio de Email Satisfactorio')
    }
    showInfo (){
        alert(`Usuario: ${this.username}(${this.email})`);
    }
}

// INSTANCIAR

let user = new User ('magb', '1234', 'm@g.com');
user.login('magb', '1234');
user.resetPassword('admi');
user.login ('magb', 'admin');
user.showInfo();

