import Elements from "././utils/elements";
import Messages from "././utils/messages";
import Methods from "././utils/methods";
import Testdata from "././utils/testdata";
import { t, Selector,ClientFunction } from 'testcafe';



const messages = new Messages();
const methods = new Methods();
const testdata = new Testdata();
const elements = new Elements();


fixture `PlaceOrderExistingUserSignedIn`

	.beforeEach( async t => {
		await t.maximizeWindow();
		await t.navigateTo(testdata.url);
		await t.click(elements.signInHeader);
		await methods.login(testdata.email, testdata.password);
		await t.click(elements.women);
   	});



//same TC1 from PlaceOrder-User is not logged in except row 45
test.only('TC1: Place order > add to cart > bankwire', async t => {
	//await t.debug();
	await t
		.hover(elements.product1)
		.expect(elements.product1.hasClass(testdata.hovered)).ok(messages.classPresent)
		.click(elements.addToCart);
	await t.expect(elements.iconOk.exists).ok(messages.iconOk,{ timeout: testdata.longWait });
	await t.expect(elements.okText.innerText).eql(testdata.productAddedSuccessfully,messages.productAddedSuccessfully);
	await t.click(elements.proceedToCheckout);
	await t.click(elements.proceedToCheckoutSummary);
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	await t.click(elements.checkbox);
	await t.click(elements.submit.withText(testdata.proceedToCheckout));
	await t.click(elements.bankWire);
	await t.click(elements.submit.withText(testdata.iConfirmMyOrder));
	await t.expect(elements.orderComplete.innerText).eql(testdata.orderComplete);
})
	.meta( { 
              desktop: 'true',
              regression: 'true', 
});

