/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            //this.data = data; //local run of the fixture file if it doesnt work use line below
            globalThis.data = data;
        })

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })

    })
    it("Sould be able to submit a sucessfull via contact us form", () => {

        /* Deprecated by the use off hook before, left for example  
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })*/

        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');

        /* Deprecated
        cy.get('[name="first_name"]').type(data.first_name) // using fixtures
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("whatever joe (previous was john that was hardcoded) has to say")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');*/

        cy.webDriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "Will I learn Cypress?", 'h1', 'Thank You for your Message!');
    });

    it("Sould mot be able to submit sucessfully via contact us form as all fields are required", () => {

        /* Same as above example
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })*/

        /*cy.get('[name="first_name"]').type("jhon")
        cy.get('[name="last_name"]').type("doe")
        cy.get('textarea.feedback-input').type("whatever john has to say")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');*/
        cy.webDriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "Will I learn Cypress?", 'body', 'Error: Invalid email address');
    });
})
