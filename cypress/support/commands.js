
import { elements } from '../fixtures/elements'

// The sign in command was not used in this test because cypress browser is throwing 400 error while trying to sign in
Cypress.Commands.add('login', (username, password) => {
    cy.get(elements.login).click()
    cy.get('form').within(($form) => {
        cy.get(elements.username).type(username).should('have.value',username)
        cy.get(elements.password).type(password).should('have.value',password)
        cy.get(elements.login).click()
    })
})
Cypress.Commands.add('register', (username, password) => {
    cy.get(elements.register).click()
    cy.get('form').within(($form) => {
    cy.get(elements.username).type(username).should('have.value',username)
    cy.get(elements.password).type(password).should('have.value',password)
    cy.get(elements.register).click()
    })
})
import 'cypress-file-upload';
