/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Sould be able to submit a sucessfull submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");

           cy.get("a[href$='contact']").click().then(function(itemHeaderText){
            cy.log("Selected the folowing item: " + itemHeaderText.text()) 
           });
           //cy.xpath("//a[contains(@href, 'contact')]").click();
           cy.get('#ContactUsFrm_first_name').type("John");
           cy.get('#ContactUsFrm_email').type("john.doe@gmail.com");
           cy.get('#ContactUsFrm_email').should('have.attr','name','email');

           cy.get('#ContactUsFrm_enquiry').type("Will I learn cypress");
           //cy.get('.col-md-6 > .btn').click(); 
           cy.get("button[title='Submit']").click();
           cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')

        });
   
})
