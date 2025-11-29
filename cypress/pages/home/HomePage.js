import BasePage from "../common/BasePage";

export class HomePage extends BasePage {
    categoryItemOption = '#itemc';
    productLabelTitle = '.card-title';


    clickLaptopsCategory() {
        this.clickElementByText(this.categoryItemOption, 'Laptops');
    }

    selectLaptopProduct(productName) {
        this.clickElementByText(this.productLabelTitle, productName);
    }

}