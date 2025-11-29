import BasePage from "../common/BasePage";

export class PlaceOrderModal extends BasePage {

    nameInput = '#name';
    countryInput = '#country';
    cityInput = '#city';
    creditCardInput = '#card';
    monthInput = '#month';
    yearInput = '#year';
    purchaseButton = 'button[onclick="purchaseOrder()"]';
    successModal = '.sweet-alert';
    successPurchaseText = '.sweet-alert h2';
    okButton = '.confirm';

    enterName(name) {
        this.typeText(this.nameInput, name);
    }

    enterCountry(country) {
        this.typeText(this.countryInput, country);
    }

    enterCity(city) {
        this.typeText(this.cityInput, city);
    }

    enterCreditCard(creditCard) {
        this.typeText(this.creditCardInput, creditCard);
    }

    enterMonth(month) {
        this.typeText(this.monthInput, month);
    }

    enterYear(year) {
        this.typeText(this.yearInput, year);
    }

    clickPurchase() {
        this.clickElement(this.purchaseButton);
    }

    clickOk() {
        this.clickElement(this.okButton);
    }

    verifySuccessModalVisible() {
        this.assertElementIsVisible(this.successModal);
    }

    verifySuccessPurchaseMessage() {
        this.assertContainsText(this.successPurchaseText, 'Thank you for your purchase!');
    }

    verifySuccessModalDisappeared() {
        this.assertElementNotVisible(this.successModal);
    }

}