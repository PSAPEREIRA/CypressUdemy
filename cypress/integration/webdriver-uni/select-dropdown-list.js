/// <reference types="Cypress" />

const { should } = require("chai");

describe("Interact with the dropdpwn-list via webdriveuni", () => {
    it("Select specific values via dropdown-list", () => {

        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery');

        cy.get('dropdowm-menu-2').select('maven'),should('have.value','maven');
        cy.get('#dropdowm-menu-3').select('TestNg').contains('TestNG');
    });

})
