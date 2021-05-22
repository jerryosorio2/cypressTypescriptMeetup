/// <reference types="cypress" />

describe('NoPOMStructure', () => {
    before(() => {
      cy.visit('http://www.google.com')
    })

    it('Searching in Google', () => {
        cy.get('.gLFyf').clear().type("Selenium").type("{enter}")
        cy.get('[href="https://www.selenium.dev/"] > .LC20lb').click()
        cy.get('.hero > :nth-child(1)').contains("Selenium AUTOmates BROWSERS", { matchCase: false })
    })

})