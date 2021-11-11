/// <reference types="Cypress" />

describe("Test file upload via webdriverUni", () => {
    it("Upload a file...", () => {

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });

        cy.fixture("PCSPECS.png","base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "PCSPECS.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        });
        cy.get("#submit-button").click();
    });
})
