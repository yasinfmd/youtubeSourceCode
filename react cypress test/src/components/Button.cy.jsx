import React from 'react'
import Button from './Button'


describe('Buton Component Testi', () => {

  beforeEach(function () {
    // runs before each test in this block
    console.log('Selam')
  //  cy.mount(<Button />)
  });
  it('Buton Componenti Ekranda Render Edilir', () => {
    cy.mount(<Button />)
  })

  it('Buton Componenti  Tıkla Metnini İçerir', () => {
    cy.mount(<Button id="my_btn" text="Tıkla" />)
    cy.get('#my_btn').should('contain','Tıkla')
  })

  it('Buton Componenti  Id   İçerir ve Id değeri my_btn midir ?', () => {
    cy.mount(<Button id="my_btn" text="Tıkla" />)
    cy.get('#my_btn').should('have.attr','id')
    cy.get('#my_btn').should('have.id','my_btn')
  })

  it('Buton Componenti  Disabled mıdır  ?', () => {
    cy.mount(<Button id="my_btn" text="Tıkla" disabled={false} />)
    cy.get('#my_btn').should('not.be.disabled')
    cy.get('#my_btn').click()
    cy.mount(<Button id="my_btn" text="Tıkla" disabled={true} />)
    cy.get('#my_btn').should('have.attr','disabled')
    cy.get('#my_btn').should('be.disabled')
  })

  it('Buton Componenti  Selam Classına Sahip mi  ?', () => {
    cy.mount(<Button id="my_btn" className="Selam" text="Tıkla"  />)
    cy.get('#my_btn').should('have.class','Selam')

  })
  it('Buton Componenti  Kırmızı Arka Plan Rengine Sahip mi  ?', () => {
    cy.mount(<Button id="my_btn" color="red" className="Selam" text="Tıkla"  />)
    cy.get('#my_btn').should('have.css','background-color', 'rgb(255, 0, 0)')
  })


})
