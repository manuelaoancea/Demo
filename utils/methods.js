import Testdata from "./testdata";
import Options from "./options";
import Elements from "./elements";
import Locators from "./locators";
import Messages from "./messages";
import {Selector, t} from 'testcafe';


const elements = new Elements();
const locators = new Locators();
const testdata= new Testdata();
const options = new Options();
const messages = new Messages();


export default class Methods {
    async login(email = testdata.email, password = testdata.password) {
        await t.click(elements.email);
        await t.typeText(elements.email, email);
        await t.typeText(elements.password, password); 
        await t.click(elements.signIn);
    }   

	async checkExists(element) {
        let response = false;
        await element.exists.then(exists => {
            if (exists)
                response = true;
        });
        return response;
    }

    async addProduct(option, index = 1){
        const product = elements.productItem.nth(index-1);
        switch (option) {
            case options.addToCart:
                await t
                    .hover(product)
                    .click(elements.addToCart);
                break;
            case options.quickView:
                await t
                    .hover(product)
                    .click(elements.quickView)
                    .switchToIframe(locators.iframe);
                break;
            case options.more:
                await t
                    .hover(product)
                    .click(elements.more);
                break;
            default:
                console.log(messages.addProduct);
                break;

        }

    }
    
}