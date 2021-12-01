import { elements } from '../../fixtures/elements';
export var add_books = (num) => {
    cy.get(elements.discover).eq(1).click()
    cy.wait(1000)
    cy.get(elements.add_book).eq(num).click({force:true})
    cy.get(elements.remove_from_list).should('exist')
    cy.get(elements.reading_list).click()
    cy.get(elements.book).should('exist')
    cy.get(elements.remove_from_list).should('exist').click()
}