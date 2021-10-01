/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Sould be able to submit a sucessfull via contact us form", () => {
        
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#contact-us').invoke('removeAttr','target').click({force:true})

    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should('have.property','charset').and('eq','UTF-8');
    cy.title().should('include','WebDriver | Contact Us');
    cy.url().should('include','contactus');
    
    
    cy.get('[name="first_name"]').type("jhon")
    cy.get('[name="last_name"]').type("doe")
    cy.get('[name="email"]').type("john.doe@gmail.com")
    cy.get('textarea.feedback-input').type("whatever john has to say")
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
});
    it("Sould mot be able to submit sucessfully via contact us form as all fields are required", () =>{
        
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        
        cy.get('[name="first_name"]').type("jhon")
        cy.get('[name="last_name"]').type("doe")
        cy.get('textarea.feedback-input').type("whatever john has to say")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})
