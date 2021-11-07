/// <reference types="Cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {

        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
        cy.get("@productThumbnail").its("length").should("be.gt", 5);
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
    });
    it("Check how many products are in the homepage and validate cart", () => {

        cy.visit("https://www.automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.at.least', 16);
        cy.get('@productThumbnail')
            .find('.productcart')
            .invoke('attr', 'title')
            .should('include', 'Add to Cart');
    });

    it("Calculate total of normal and sale products", () => {

        cy.visit("https://www.automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        /*cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            cy.log($el.text());
            });*/
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;

        cy.get('@itemPrice').then($linkText => {

            var itemPrice = $linkText.split('$')
            var itemsPriceTotal = 0;

            for (let i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                itemsPriceTotal += Number(itemPrice[i]);
            }

            itemsTotal += itemsPriceTotal;

            cy.log("non sale price items total:" + itemsPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {

            var saleItemPrice = $linkText.split('$')
            var salePriceTotal = 0;

            for (let i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i]);
                salePriceTotal += Number(saleItemPrice[i]);
            }
            itemsTotal += salePriceTotal;
            cy.log("sale price items total:" + salePriceTotal);
        })
            .then(() => {
                cy.log("The total price of all products: " + itemsTotal)
            })
    });
});
