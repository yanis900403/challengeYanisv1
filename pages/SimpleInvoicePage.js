
//const { commands } = require("./HomePage")

module.exports= {
    url:'https://simplepos.ai/',

    elements:{
     
        buttonLoggin:'ul#menu-demo-menu li#menu-item-7758',
    
    },

    commands:[{
        
        login() {
           this.waitForElementVisible('.logo')
            .assert.title("Factura Simple")
            .waitForElementVisible('@buttonLoggin',8000)
            .click('@buttonLoggin')
            .pause(2000);
        
            return this; // Return page object for chaining
          },
    }]
}