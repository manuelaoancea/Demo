import Testdata from "./../testdata";
import Options from "./options";
import CommonElements from "./../elements";
import Elements from "./elements";
import CommonMethods from "./../methods";
import Messages from "./../messages";
import {Selector, t} from 'testcafe';

const commonElements = new CommonElements();
const elements = new Elements();
const testdata= new Testdata();
const options = new Options();
const messages = new Messages();
const commonMethods = new CommonMethods();


export default class Methods {

    async placeOrder(email = testdata.email, password = testdata.password) {

        if (await commonMethods.checkExists(commonElements.infoPAddToCart)) {
                await t.click(commonElements.infoPAddToCart);
                await t.switchToMainWindow();
        }
        await t.click(commonElements.proceedToCheckout);
        await t.click(elements.proceedToCheckoutSummary);
        if (await commonMethods.checkExists(commonElements.email)) {
            await commonMethods.login(email, password);  
        }
        await t.click(elements.submit.withText(testdata.proceedToCheckout));
        await t.click(elements.checkbox);
        await t.click(elements.submit.withText(testdata.proceedToCheckout));
    }   

    async paymentMethod(option) {
        switch (option) {
            case options.bankWire:
                await t.click(elements.bankWire);
                break;
            case options.check:
                await t.click(elements.check);

                break;
            default:
                console.log(messages.paymentMethod);
                break;
        } 
        await t.click(elements.submit.withText(testdata.iConfirmMyOrder));
    }
}