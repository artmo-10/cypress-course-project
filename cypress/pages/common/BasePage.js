export default class BasePage {

    typeText(selector, text) {
        cy.get(selector).type(text);
    }

    clickElement(selector) {
        cy.get(selector).click();
    }

    clickElementByText(tag, text) {
        cy.contains(tag, text).click();
    }

    asssertUrlContains(expectedUrlPart) {
        cy.url().should('include', expectedUrlPart);
    }

    assertContainsText(selector, text) {
        cy.get(selector).should('contain', text);
    }

    assertElementNotVisible(selector) {
        cy.get(selector).should('not.be.visible');
    }

    assertElementIsVisible(selector) {
        cy.get(selector).should('be.visible');
    }


}