/// <reference types="Cypress" />
describe("Handling data via webDriverUni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        })
            .then(() => {
                for (let i in userDetails) {
                    cy.log(userDetails[i]);
                }
            });
    });
});