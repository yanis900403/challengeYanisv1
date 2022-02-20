//const { elements } = require("../pages/HomePage")

module.exports = {
    "Factura Simple":function (browser){

      const page=browser.page.SimpleInvoicePage();
      const loginpage=browser.page.LoginPage();
      const userLogged=browser.page.UserLoggedInPage();
      const password= 'facturasimple';
      const email='demo@cualit.com';
   
      page
       .navigate()
       .login() 
       .assert.urlEquals('https://admin.facturasimple.uy/signin', 'The URL is https://admin.facturasimple.uy/signin')
        .saveScreenshot('tests_output/login.png')
       
      loginpage
        .LogginCredentiales(email, password)

      userLogged
      .assert.urlEquals('https://admin.facturasimple.uy/dashboard', 'The URL is https://admin.facturasimple.uy/dashboard')
      .saveScreenshot('tests_output/login.png')
      .assert.textContains('@userDemo',"Demo Admin","The logged user is Demo Admin")
          
    },

  
    
}