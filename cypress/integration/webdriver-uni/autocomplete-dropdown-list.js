/// <reference types="Cypress" />
describe("Verify Autocomplete dropdown lists via webdiveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#myInput').type('A');
        cy.get('#myInputAutocomplete-list > *').each(($el, index, $list) => {
          
            const prod = $el.text();
            const productToSelect = 'Avocado';

            if (prod === productToSelect) {
                $el.trigger("click");
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect);
            }
        }).then(() => {
            cy.get('#myInput').type('G');
            cy.get('#myInputAutocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes'

                if (prod === productToSelect) {
                    $el.trigger("click");
                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect);
                }
            })
        })
    });
})