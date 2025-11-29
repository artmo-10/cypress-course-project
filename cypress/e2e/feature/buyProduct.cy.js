import { LoginPage } from '../../pages/auth/LoginPage';
import { HeaderPage } from '../../pages/common/HeaderPage';
import { HomePage } from '../../pages/home/HomePage';
import { ProductPage } from '../../pages/product/ProductPage';
import { CartPage } from '../../pages/cart/CartPage';
import { PlaceOrderModal } from '../../pages/cart/PlaceOrderModal';
import users from '../../fixtures/users.json';
import orderData from '../../fixtures/orderData.json';

let headerPage = new HeaderPage();
let loginPage = new LoginPage();
let homePage = new HomePage();
let productPage = new ProductPage();
let cartPage = new CartPage();
let placeOrderModal = new PlaceOrderModal();

let productName = 'MacBook Pro';

describe('Demoblaze E2E - Buy a Product', () => {
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.demoblaze.com/index.html');

    });

    it('Log in and buy a laptop product', () => {
        // Log in process and verification
        headerPage.clickLogInOption();
        loginPage.enterUsername(users.demo_user.username);
        loginPage.enterPassword(users.demo_user.password);
        loginPage.clickLoginButton();
        loginPage.verifyLoginButtonDisappeared();
        headerPage.assertUserLoggedIn(users.demo_user.username);

        // Select category, choose a product and add to the cart
        homePage.clickLaptopsCategory();
        homePage.selectLaptopProduct(productName);
        productPage.verifyProductTitle(productName);
        productPage.clickAddToCart();

        // Navigate to cart, verify the product is added and place the order
        headerPage.clickCartOption();
        cartPage.verifyProductInCart(productName);
        cartPage.clickPlaceOrder();

        // Fill in order details and complete the purchase
        placeOrderModal.enterName(orderData.demo_user_data.name);
        placeOrderModal.enterCountry(orderData.demo_user_data.country);
        placeOrderModal.enterCity(orderData.demo_user_data.city);
        placeOrderModal.enterCreditCard(orderData.demo_user_data.credit_card);
        placeOrderModal.enterMonth(orderData.demo_user_data.month);
        placeOrderModal.enterYear(orderData.demo_user_data.year);
        placeOrderModal.clickPurchase();

        // Verify purchase success and close the modal
        placeOrderModal.verifySuccessModalVisible();
        placeOrderModal.verifySuccessPurchaseMessage();
        placeOrderModal.clickOk();
        placeOrderModal.verifySuccessModalDisappeared();

    });
});