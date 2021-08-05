export default class Testdata {
   constructor () {
        
        this.url = `http://automationpractice.com/index.php`
        
        //wait times
      	this.shortWait = 3000
        this.avgWait = 1000
      	this.longWait = 30000
        this.veryLongWait = 60000
        this.veryShortWait = 100

        this.hovered = 'hovered'


        //myPortfolio - login
        this.email = 'manuela.tabacaru@gmail.com'
        this.password = 'Automation'

        //cart
        this.addToCart = 'Add to cart'
        this.proceedToCheckout = 'Proceed to checkout'
        this.productAddedSuccessfully = 'Product successfully added to your shopping cart'

        //04. Shipping
        this.mustAgreeToTerms = 'You must agree to the terms of service before continuing.'

        //05. Payment
        this.iConfirmMyOrder = 'I confirm my order'
        this.orderComplete = 'Your order on My Store is complete.'
    

    }
}