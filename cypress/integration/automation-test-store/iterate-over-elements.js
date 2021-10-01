/// <reference types="Cypress" />

describe("Iterate over elements", () => {
    it("Log information of all hair care produtcs", () => {

        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });

    });
    it("add specific product to basket", () => {

        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes('Curls to straight Shampoo')) {
                cy.wrap($el).click();
            }
        });

    });

})