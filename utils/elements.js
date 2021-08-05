import { Selector } from 'testcafe';
import Testdata from "./testdata";

const testdata = new Testdata();


export default class Elements {
    constructor () {
        //Side-wide
        //header
        this.signInHeader = Selector('.login')
        //menu
        this.women = Selector('[href*=id_category][title="Women"]')
        //cart
        this.cart = Selector('.shopping_cart [href*=order] b')
        this.cartCheckOut = Selector('[title="Check out"] span')

        //product list
        this.productItem = Selector('.first-item-of-mobile-line')
        this.product1 =  this.productItem.nth(0)
        this.productName = Selector('.hovered .product-name')
        this.quickView = Selector('.hovered .quick-view')
        this.addToCart = Selector('.hovered [title="'+testdata.addToCart+'"]')
        //.first-item-of-mobile-line.hovered .quick-view[href*="id_product=1"]
        //not sure if i should use nth or the above
        this.more = Selector('.hovered [title="View"]')

        //quickView popup
        this.productNameQuickView = Selector('#product [itemprop="name"]')
        //box-info
        this.infoPAddToCart = Selector('#add_to_cart [name="Submit"] span')
       
        
        //cart
        this.productNameCart = Selector('.layer_cart_product_info .product-name')
        this.okText = Selector('.layer_cart_product h2')
        this.iconOk = this.okText.find('.icon-ok')
        this.proceedToCheckout = Selector('[title="Proceed to checkout"]')
        this.close = Selector('[title="Close window"]')


        //SHOPPING-CART SUMMARY
        //01. Summary
        this.proceedToCheckoutSummary = Selector('.standard-checkout[title="Proceed to checkout"]')
        this.productNameSummary = Selector('.cart_description .product-name a')
        this.continueShoppingSummary = Selector('.cart_navigation [title="Continue shopping"]')

        //02. Sign in
        this.email = Selector('[id="email"]')
        this.password = Selector('[id="passwd"]')
        this.signIn = Selector('[id="SubmitLogin"]')

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