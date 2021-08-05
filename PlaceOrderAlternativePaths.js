import Elements from "././utils/elements";
import Messages from "././utils/messages";
import Methods from "././utils/methods";
import Testdata from "././utils/testdata";
import { t, Selector,ClientFunction } from 'testcafe';



const messages = new Messages();
const methods = new Methods();
const testdata = new Testdata();
const elements = new Elements();


fixture `PlaceOrder-User is not logged in`

	.beforeEach( async t => {
		await t.maximizeWindow();
		await t.navigateTo(testdata.url);
   	});




test('TC1: Continue shopping from 01 Summary', async t => {
	//TC1 26-38
	await t.hover(elements.product1);
	const productNameToBeAdded = await elements.productName.innerText;
	await t
		.hover(elements.product1)
		.expect(elements.product1.hasClass(testdata.hovered)).ok(messages.classPresent)
		.click(elements.addToCart,{ timeout: testdata.longWait });
	await t.expect(elements.iconOk.exists).ok(messages.iconOk,{ timeout: testdata.longWait });
	await t.expect(elements.okText.innerText).eql(testdata.productAddedSuccessfully,messages.productAddedSuccessfully);
	const addedProductNameCart = await elements.productNameCart.innerText;
	await t.expect(addedProductNameCart).eql(productNameToBeAdded);
	await t.click(elements.proceedToCheckout);
	const addedProductNameSummary = await elements.productNameSummary.innerText;
	await t.expect(addedProductNameSummary).eql(productNameToBeAdded);
	await t.click(elements.continueShoppingSummary);
	let url = ClientFunction(() => document.location.href);
	await t.expect(url()).eql(testdata.url);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC2: Checkout from Cart', async t => {
	//TC1 26-38
	await t.hover(elements.product1);
	const productNameToBeAdded = await elements.productName.innerText;
	await t
		.hover(elements.product1)
		.expect(elements.product1.hasClass(testdata.hovered)).ok(messages.classPresent)
		.click(elements.addToCart,{ timeout: testdata.longWait });
	await t.expect(elements.iconOk.exists).ok(messages.iconOk,{ timeout: testdata.longWait });
	await t.expect(elements.okText.innerText).eql(testdata.productAddedSuccessfully,messages.productAddedSuccessfully);
	const addedProductNameCart = await elements.productNameCart.innerText;
	await t.expect(addedProductNameCart).eql(productNameToBeAdded);
	await t.click(elements.close);
	await t
		.hover(elements.cart)
		.click(elements.cartCheckOut);
	//01. Summary phase TC1: 37-48
	//i think that there is a bug - and user cannot continue flow through this path
	const addedProductNameSummary = await elements.productNameSummary.innerText;
	await t.expect(addedProductNameSummary).eql(productNameToBeAdded);
	await t.click(elements.proceedToCheckoutSummary);
	await methods.login(testdata.email, testdata.password);
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	await t.click(elements.checkbox);
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	const addedProductNamePayment = await elements.productNameSummary.innerText;
	await t.expect(addedProductNamePayment).eql(productNameToBeAdded);
	await t.click(elements.bankWire);
	await t.click(elements.submit.withText(testdata.iConfirmMyOrder));
	await t.expect(elements.orderComplete.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

test('TC3: Place order without agreeing to terms', async t => {
	//TC1 26-41
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
	await t.expect(elements.checkbox.exists).ok(messages.agreeTerms,{ timeout: testdata.longWait });	
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	await t.expect(elements.alertFail.innerText).eql(testdata.mustAgreeToTerms);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});



