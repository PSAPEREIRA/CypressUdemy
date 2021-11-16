/// <reference types="Cypress" />

describe("Cypress Web Security", () => {
    //this fails
    it("Validate visitng 2 different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.automationteststore.com/');
    });
    //this also fails
    it("Validate visitng 2 different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr','target').click();
    });
});
