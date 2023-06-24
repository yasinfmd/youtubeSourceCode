describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#inputEl').should('have.value','Merhaba')
    cy.get('#pEl').contains('Merhaba')
    cy.get('#inputEl').type('{backspace}')
    cy.get('#inputEl').type('{backspace}')
    cy.get('#inputEl').type('{backspace}')
    cy.get('#inputEl').type('{backspace}')
    cy.get('#pEl').contains('Mer')



  })
})