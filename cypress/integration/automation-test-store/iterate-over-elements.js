/// <reference types="Cypress" />

describe("Iterate over elements", () => {

    beforeEach(function () {
        
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    })

    it("Log information of all hair care produtcs", () => {

        //Deprecated
        /*cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();*/

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });

    });

    it("add specific product to basket", () => {

        /*
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        */

        //Deprecated by custom Command
        /*cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes('Curls to straight Shampoo')) {
                cy.wrap($el).click();
            }
        });*/

        //Custom Comand - in command.js
        cy.selectProduct('Curls to straight Shampoo');
      });

      it("add specific product to basket2", () => {
        cy.selectProduct('Seaweed Conditioner');
    });

    it("add specific product to basket3", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
})