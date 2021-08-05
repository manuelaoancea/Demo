import Elements from "././utils/elements";
import Messages from "././utils/messages";
import Methods from "././utils/methods";
import Testdata from "././utils/testdata";
import Options from "././utils/options";
import { t, Selector,ClientFunction } from 'testcafe';


const elements = new Elements();
const messages = new Messages();
const methods = new Methods();
const testdata = new Testdata();
const options = new Options();



fixture `PlaceOrder-User is not logged in`

	.beforeEach( async t => {
		await t.maximizeWindow();
		await t.navigateTo(testdata.url);
   	});


test.only('TC1: Product list > hover over product > add to cart > bankwire', async t => {
	await t.hover(elements.product1);
	const productNameToBeAdded = await elements.productName.innerText;
	await methods.addProduct(options.quickView);
	await t.expect(elements.iconOk.exists).ok(messages.iconOk,{ timeout: testdata.longWait });
	await t.expect(elements.okText.innerText).eql(testdata.productAddedSuccessfully,messages.productAddedSuccessfully);
	//const productNameAdded = await elements.productNameCart.innerText;
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

test('TC2: Product list > hover over product > Quick View > bankwire', async t => {
	await t.hover(elements.product1);
	const productNameToBeAdded = await elements.productName.innerText;
	await t
		.hover(elements.product1)
		.click(elements.quickView, { timeout: testdata.longWait });
	//await t.debug();
	//await t.click(elements.submit.withText(testdata.addToCart));
	await t.click(elements.infoPAddToCart);
	//then TC1 row 31-47
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});


test('TC3: Product list > hover over product > More > bankwire', async t => {
	await t
		.hover(elements.product1)
		.click(elements.more);
	//await t.debug();
	//await t.click(elements.submit.withText(testdata.addToCart));
	await t.click(elements.infoPAddToCart);
	//then TC1 row 31 - 47
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC4: Product list > hover over product > add to cart > check', async t => {
	//TC1 row 25 - 45 different check - could i make a function with 2 parameters?
	//row 45 differnet - check
	//row 47 (expect) different
	await t.hover(elements.product1);
	const productNameToBeAdded = await elements.productName.innerText;
	await t
		.hover(elements.product1)
		.expect(elements.product1.hasClass(testdata.hovered)).ok(messages.classPresent)
		.click(elements.addToCart);
	await t.expect(elements.iconOk.exists).ok(messages.iconOk,{ timeout: testdata.longWait });
	await t.expect(elements.okText.innerText).eql(testdata.productAddedSuccessfully,messages.productAddedSuccessfully);
	const addedProductNameCart = await elements.productNameCart.innerText;
	await t.expect(addedProductNameCart).eql(productNameToBeAdded);
	await t.click(elements.proceedToCheckout);
	const addedProductNameSummary = await elements.productNameSummary.innerText;
	await t.expect(addedProductNameSummary).eql(productNameToBeAdded);
	await t.click(elements.proceedToCheckoutSummary);
	await methods.login(testdata.email, testdata.password);
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	await t.click(elements.checkbox);
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	const addedProductNamePayment = await elements.productNameSummary.innerText;
	await t.expect(addedProductNamePayment).eql(productNameToBeAdded);
	await t.click(elements.check);
	await t.click(elements.submit.withText(testdata.iConfirmMyOrder));
	await t.expect(elements.alertSuccess.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC5: Product list > hover over product > Quick View > bankwire', async t => {
	await t
		.hover(elements.product1)
		.expect(elements.product1.hasClass(testdata.hovered)).ok(messages.classPresent)
		.click(elements.quickView, { timeout: testdata.longWait });
	//await t.debug();
	//await t.click(elements.submit.withText(testdata.addToCart));
	await t.click(elements.infoPAddToCart);
	//then TC4 row 97-113
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});


test('TC6: Product list > hover over product > More > bankwire', async t => {
	await t
		.hover(elements.product1)
		.expect(elements.product1.hasClass(testdata.hovered)).ok(messages.classPresent)
		.click(elements.more);
	//await t.debug();
	//await t.click(elements.submit.withText(testdata.addToCart));
	await t.click(elements.infoPAddToCart);
	//then TC4 row 97-113
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});