import CommonElements from "./utils/elements";
import Elements from "./utils/checkout/elements";
import Messages from "./utils/messages";
import CommonMethods from "./utils/methods";
import Methods from "./utils/checkout/methods";
import Testdata from "./utils/testdata";
import CommonOptions from "./utils/options";
import Options from "./utils/checkout/options";
import { t, Selector,ClientFunction } from 'testcafe';


const commonElements = new CommonElements();
const elements = new Elements();
const messages = new Messages();
const commonMethods = new CommonMethods();
const methods = new Methods();
const testdata= new Testdata();
const commonOptions = new CommonOptions();
const options = new Options();


const product = commonElements.productItem.nth(0);

fixture `Place Order: User is not logged in`

	.beforeEach( async t => {
		await t.maximizeWindow();
		await t.navigateTo(testdata.url);
   	});

test('TC1: Product list > hover over product > add to cart > bankwire', async t => {
	await t.hover(product,{ timeout: testdata.longWait });
	const productNameToBeAdded = await commonElements.productName.innerText;
	await commonMethods.addProduct(commonOptions.addToCart);
	await t.expect(commonElements.iconOk.exists).ok(messages.iconOk,{ timeout: testdata.longWait });
	await t.expect(commonElements.okText.innerText).eql(testdata.productAddedSuccessfully,messages.productAddedSuccessfully);
	await t.expect(commonElements.productNameCart.innerText).eql(productNameToBeAdded);
	await t.click(commonElements.proceedToCheckout);
	await t.expect(elements.productNameSummary.innerText).eql(productNameToBeAdded);
	await t.click(elements.proceedToCheckoutSummary);
	await commonMethods.login();
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

test('TC2: Product list > hover over product > Quick View > bankwire', async t => {
	await t.hover(product,{ timeout: testdata.longWait });
	const productNameToBeAdded = await commonElements.productName.innerText;
	await commonMethods.addProduct(commonOptions.quickView);
	await t.expect(commonElements.productNameOrder.innerText).eql(productNameToBeAdded,{ timeout: testdata.longWait });
	await methods.placeOrder();
	await methods.paymentMethod(options.bankWire);
	await t.expect(elements.orderComplete.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC3: Product list > hover over product > More > bankwire', async t => {
	await t.hover(product,{ timeout: testdata.longWait });
	const productNameToBeAdded = await commonElements.productName.innerText;
	await commonMethods.addProduct(commonOptions.more);
	await t.expect(commonElements.productNameOrder.innerText).eql(productNameToBeAdded,{ timeout: testdata.longWait });
	await methods.placeOrder();
	await methods.paymentMethod(options.bankWire);
	await t.expect(elements.orderComplete.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC4: Product list > hover over product > add to cart > check', async t => {
	await commonMethods.addProduct(commonOptions.addToCart);
	await methods.placeOrder();
	await methods.paymentMethod(options.check);
	await t.expect(elements.alertSuccess.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC5: Product list > hover over product > Quick View > check', async t => {
	await commonMethods.addProduct(commonOptions.quickView);
	await methods.placeOrder();
	await methods.paymentMethod(options.check);
	await t.expect(elements.alertSuccess.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC6: Product list > hover over product > More > check', async t => {
	await commonMethods.addProduct(commonOptions.more);
	await methods.placeOrder();
	await methods.paymentMethod(options.check);
	await t.expect(elements.alertSuccess.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});