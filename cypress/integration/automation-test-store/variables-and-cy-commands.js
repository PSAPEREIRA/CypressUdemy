/// <reference types="Cypress" />

describe("Verifying variables,cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {

        // Pay attention to the order but both are still NOT a recomended approach

        cy.visit("https://www.automationteststore.com/");

        /* The following will fail:

        const makeUpLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        const skinCareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        makeUpLink.click();
        skinCareLink.click();*/

        /* The following will pass:

        const makeUpLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        makeUpLink.click();

        const skinCareLink = cy.get("a[href*='product/category&path=']").contains("SkinCare");
        skinCareLink.click();
        */

        // Recommended approach:
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();

    });

    it("Navigating to specific product pages Makeup", () => {

        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        /*The following code will fail
        const header = cy.get("h1 .maintext");
        cy.log(header.text())*/

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup')
        })
    });
    it("Validate porperties of the contact us page", () => {

        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        //Uses cypress command and chain it

        cy.contains('#ContactUsFrm', 'Contact Us Form')
            .find('#field_11')
            .should('contain', 'First name');


        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
    });
})