describe('App.js sayfası açılır', () => {
  it('Anasayfa açılır', () => {
    cy.visit('/')
    cy.viewport(600,600)
    cy.get('#wrapper_div').should('have.id','wrapper_div')
    console.log(
        cy.get('#wrapper_div').children()
    )
    cy.get('#wrapper_div').children().should('have.length',2)
  })
})
