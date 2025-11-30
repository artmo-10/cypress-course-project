import createBooking from '../../fixtures/booking.json';
import updatedBooking from '../../fixtures/updatedBooking.json';

describe("Restful Booker API Tests", () => {
    
    let authToken;
    let bookingId;

    before(() => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                username: 'admin',
                password: 'password123'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            authToken = response.body.token;
        });
    });

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it("Create a new booking record", () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            headers: {
                'Content-Type': 'application/json'
            },
            body: createBooking
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('bookingid');
            bookingId = response.body.bookingid;
            cy.log(`Created booking ID: ${bookingId}`);
            expect(response.body.booking).to.deep.equal(createBooking);
            cy.log(`Booking details: ${JSON.stringify(response.body.booking)}`);
        });
    });

    it("Get the created booking record", () => {
        cy.request({
            method: 'GET',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.equal(createBooking);
            cy.log(`Booking details: ${JSON.stringify(response.body)}`);
        });
    });

    it("Update the booking record", () => {
        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${authToken}`
            },
            body: updatedBooking
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.equal(updatedBooking);
            cy.log(`Updated booking details: ${JSON.stringify(response.body)}`);
        });
    });

    it("Delete the booking record", () => {
        cy.request({
            method: 'DELETE',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });
});