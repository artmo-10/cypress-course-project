describe("DemoQA Contract Testing", () => {
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it("Bookstore Contract Testing", () => {
        cy.visit("https://demoqa.com");
        cy.intercept({
            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Books'
        }).as('getBooks');

        cy.get('.card-body').contains('Book Store Application').click();

        cy.wait('@getBooks').then((interception) => {
            const items = interception.response.body.books;

            items.forEach((item, index) => {
                //.rt-tbody .rt-tr-group .mr-2 a
                cy.get('.mr-2 a').eq(index).should('have.text', item.title);
                cy.get('.rt-tbody .rt-tr-group').eq(index).find('.rt-td').eq(2).should('have.text', item.author);
                cy.get('.rt-tbody .rt-tr-group').eq(index).find('.rt-td').eq(3).should('have.text', item.publisher);
                cy.log(`Verified book #${index+1}: ${item.title} by ${item.author}`);
            });
        });
    });
});