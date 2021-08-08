import { Selector } from 'testcafe';


export default class Elements {
    constructor () {


        //01. Summary
        this.proceedToCheckoutSummary = Selector('.standard-checkout[title="Proceed to checkout"]')
        this.productNameSummary = Selector('.cart_description .product-name a')
        this.continueShoppingSummary = Selector('.cart_navigation [title="Continue shopping"]')
        
        
        //03. Address
        this.submit = Selector('[type="submit"] span')

        
        //04.Shipping
        this.checkbox = Selector('[type="checkbox"]')
        this.alertFail = Selector('.fancybox-error')

        
        //05.Payment
        this.bankWire = Selector('.bankwire')
        this.check = Selector('.cheque')
        this.orderComplete = Selector('.cheque-indent .dark')
        this.alertSuccess = Selector('.alert-success')

        
    }
}