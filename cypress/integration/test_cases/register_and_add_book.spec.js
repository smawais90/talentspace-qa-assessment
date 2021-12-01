import 'cypress-xpath';
import { user_data } from '../../fixtures/data';
import { elements } from '../../fixtures/elements';
const fn = require('../../fixtures/functions/functions')
var book_num = Math.floor(Math.random() * 10)

describe('Register and add book Test cases', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.viewport(1900,1200)
  })
  it ('should register successfully', () => {
    cy.visit('')
    cy.register(user_data.reg_data.username, user_data.reg_data.password)
    cy.get(elements.logout).should('exist')  
  })
  it ('should add a book successfully', () => {
    fn.add_books(book_num) // adding a random book in each test
    cy.get(elements.logout).click() // logging out 
  })
  it('should return error because user already exists', () => {
    cy.register(user_data.reg_data.username, user_data.reg_data.password)
    cy.get(elements.error).should('exist')
  })
//   after (() => {
//       // In the after code we should hit the delete user Api, so that we dont populate data with redudant data.
//       // The need of random number generator will also be cleared.
//   })
})