import { Selector } from 'testcafe';
import Testdata from "./testdata";

const testdata = new Testdata();


export default class Elements {
    constructor () {
        //Side-wie
        //header
        this.signInHeader = Selector('.login')
        //menu
        this.women = Selector('[href*=id_category][title="Women"]')
        //cart
        this.cart = Selector('.shopping_cart [href*=order] b')
        this.cartCheckOut = Selector('[title="Check out"] span')

        
        //product list
        this.productItem = Selector('.first-item-of-mobile-line')
        this.productName = Selector('.hovered .product-name')
        this.quickView = Selector('.hovered .quick-view')
        this.addToCart = Selector('.hovered [title="'+testdata.addToCart+'"]')
        this.more = Selector('.hovered [title="View"]')

        this.productNameOrder = Selector('#product [itemprop="name"]')
        this.infoPAddToCart = Selector('#add_to_cart [name="Submit"] span')
       
        
        //cart
        this.productNameCart = Selector('.layer_cart_product_info .product-name')
        this.okText = Selector('.layer_cart_product h2')
        this.iconOk = this.okText.find('.icon-ok')
        this.proceedToCheckout = Selector('[title="Proceed to checkout"]')
        this.close = Selector('[title="Close window"]')

        //02. Sign in
        this.email = Selector('[id="email"]')
        this.password = Selector('[id="passwd"]')
        this.signIn = Selector('[id="SubmitLogin"]')
        
    }
}