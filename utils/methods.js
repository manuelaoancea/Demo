import Testdata from "./testdata";
import Options from "./options";
import Elements from "./elements";
import Messages from "./messages";
import {Selector, t} from 'testcafe';

const elements = new Elements();
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
                    .click(elements.addToCart,{ timeout: testdata.longWait })
                    .wait(testdata.longWait);
                break;
            case options.quickView:
                await t
                    .hover(elements.product1)
                    .click(elements.quickView,{ timeout: testdata.longWait });
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
}