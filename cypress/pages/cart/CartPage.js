import BasePage from "../common/BasePage";

export class CartPage extends BasePage {

    productRow = 'tr.success';
    placeOrderButton = 'button[data-target="#orderModal"]';

    verifyProductInCart(productName) {
        this.assertContainsText(this.productRow, productName);
    }

    clickPlaceOrder() {
        this.clickElement(this.placeOrderButton);
    }

}