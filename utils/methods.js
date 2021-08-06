import Testdata from "./testdata";
import Options from "./options";
import Elements from "./elements";
import Locators from "./locators";
import Messages from "./messages";
import {Selector, t} from 'testcafe';

const elements = new Elements();
const locators = new Locators();
const testdata = new Testdata();
const options = new Options();
const messages = new Messages();

export default class Methods {
    async login(email, password) {
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

    async addProduct(vari){
        switch (vari) {
            case options.addToCart:
                await t
                    .hover(elements.product1)
                    .click(elements.addToCart,{ timeout: testdata.longWait });
                break;
            case options.quickView:
                await t
                    .hover(elements.product1)
                    .click(elements.quickView,{ timeout: testdata.longWait })
                    .switchToIframe(locators.iframe);
                break;
            case options.more:
                await t
                    .hover(elements.product1)
                    .click(elements.more,{ timeout: testdata.longWait });
                break;
            default:
                console.log(messages.addProduct);
                break;

        }

    }

    async placeOrder(email, password) {

        if (await this.checkExists(elements.infoPAddToCart)) {
                await t.click(elements.infoPAddToCart);
                await t.switchToMainWindow();
        }
        await t.click(elements.proceedToCheckout);
        await t.click(elements.proceedToCheckoutSummary);
        if (await this.checkExists(elements.email)) {
            await this.login(testdata.email, testdata.password);  
        }
        await t.click(elements.submit.withText(testdata.proceedToCheckout));
        await t.click(elements.checkbox);
        await t.click(elements.submit.withText(testdata.proceedToCheckout));
    }   

    async paymentMethod(varii) {
        switch (varii) {
            case options.bankWire:
                await t.click(elements.bankWire);
                await t.click(elements.submit.withText(testdata.iConfirmMyOrder));
                break;
            case options.check:
                await t.click(elements.check);
                await t.click(elements.submit.withText(testdata.iConfirmMyOrder));
                break;
            default:
                console.log(messages.paymentMethod);
                break;
        } 
    }
}