// URL  https://admin.facturasimple.uy/signin

//const { commands } = require("./HomePage")

 module.exports = {
  elements: {
    password: 'facturasimple',
    email:'demo@cualit.com',
    emailLogin:'input[type="email"]',
    passwordLogin:'input[type="password"]',
    buttonIniciarSesion:'button[type=submit]',
   
  },
    commands: [{
      LogginCredentiales(email_value, password_value){
          this
          .waitForElementVisible('@emailLogin', 10000)
        .setValue('@emailLogin', email_value)
       
        .waitForElementVisible('@passwordLogin', 10000)
        .setValue('@passwordLogin', password_value)
        .waitForElementVisible('@passwordLogin', 10000)
        .click('@buttonIniciarSesion')
        .pause(10000)
        return this;
    }
  
     } ]

   
  };
  