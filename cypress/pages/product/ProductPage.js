import BasePage from "../common/BasePage";

export class ProductPage extends BasePage {

    productTitle = '.name';
    addToCartButton = 'a[onclick*="addToCart"]';
    
    clickAddToCart() {
        this.clickElement(this.addToCartButton);
    }
    
    verifyProductTitle(expectedTitle) {
        this.assertContainsText(this.productTitle, expectedTitle);
    }

}