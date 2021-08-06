import Elements from "./utils/elements";
import Locators from "./utils/locators";
import Messages from "./utils/messages";
import Methods from "./utils/methods";
import Testdata from "./utils/testdata";
import Options from "./utils/options";
import { t, Selector,ClientFunction } from 'testcafe';


const elements = new Elements();
const locators = new Locators();
const messages = new Messages();
const methods = new Methods();
const testdata = new Testdata();
const options = new Options();



fixture `Place Order: User is not logged in`

	.beforeEach( async t => {
		await t.maximizeWindow();
		await t.navigateTo(testdata.url);
   	});


test('TC1: Product list > hover over product > add to cart > bankwire', async t => {
	await t.hover(elements.product1,{ timeout: testdata.longWait });
	const productNameToBeAdded = await elements.productName.innerText;
	await methods.addProduct(options.addToCart);
	await t.expect(elements.iconOk.exists).ok(messages.iconOk,{ timeout: testdata.longWait });
	await t.expect(elements.okText.innerText).eql(testdata.productAddedSuccessfully,messages.productAddedSuccessfully);
	await t.expect(elements.productNameCart.innerText).eql(productNameToBeAdded);
	await t.click(elements.proceedToCheckout);
	await t.expect(elements.productNameSummary.innerText).eql(productNameToBeAdded);
	await t.click(elements.proceedToCheckoutSummary);
	await methods.login(testdata.email, testdata.password);
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	await t.click(elements.checkbox);
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	await t.expect(elements.productNameSummary.innerText).eql(productNameToBeAdded);
	await t.click(elements.bankWire);
	await t.click(elements.submit.withText(testdata.iConfirmMyOrder));
	await t.expect(elements.orderComplete.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test.only('TC2: Product list > hover over product > Quick View > bankwire', async t => {
	await t.hover(elements.product1,{ timeout: testdata.longWait });
	const productNameToBeAdded = await elements.productName.innerText;
	await methods.addProduct(options.quickView,{ timeout: testdata.longWait });
	await t.expect(elements.productNameOrder.innerText).eql(productNameToBeAdded,{ timeout: testdata.longWait });
	await methods.placeOrder(testdata.email, testdata.password);
	await methods.paymentMethod(options.bankWire);
	await t.expect(elements.orderComplete.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC3: Product list > hover over product > More > bankwire', async t => {
	await t.hover(elements.product1,{ timeout: testdata.longWait });
	const productNameToBeAdded = await elements.productName.innerText;
	await methods.addProduct(options.more,{ timeout: testdata.longWait });
	await t.expect(elements.productNameOrder.innerText).eql(productNameToBeAdded,{ timeout: testdata.longWait });
	await methods.placeOrder(testdata.email, testdata.password);
	await methods.paymentMethod(options.bankWire);
	await t.expect(elements.orderComplete.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC4: Product list > hover over product > add to cart > check', async t => {
	await methods.addProduct(options.addToCart);
	await methods.placeOrder();
	await methods.paymentMethod(options.check);
	await t.expect(elements.alertSuccess.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC5: Product list > hover over product > Quick View > check', async t => {
	await methods.addProduct(options.quickView);
	await methods.placeOrder();
	await methods.paymentMethod(options.check);
	await t.expect(elements.alertSuccess.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});


test('TC6: Product list > hover over product > More > check', async t => {
	await methods.addProduct(options.more);
	await methods.placeOrder();
	await methods.paymentMethod(options.check);
	await t.expect(elements.alertSuccess.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});