/// <reference types="Cypress" />

const { find } = require("lodash");

describe("Verify radio buttons via webdriveruni", () => {

    before (function(){
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
    })

    it("Check specific radio buttons", () => {

        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
    });

    it("Validate radio buttons state", () => {

        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        cy.get("[value='cabbage']").should('be.disabled');

    });
})
