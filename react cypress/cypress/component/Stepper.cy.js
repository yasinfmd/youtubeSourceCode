import {mount} from "cypress/react18";
import Stepper from "../../src/Stepper";

describe('Stepper.cy.js', () => {
  it('playground', () => {
    // eslint-disable-next-line no-undef
     cy.mount(<Stepper />)
  })
})
it('Sıfırdan başlıyor mu ?', () => {
    // eslint-disable-next-line no-undef
    cy.mount(<Stepper />)
    // eslint-disable-next-line no-undef
    cy.get('#countText').should('have.text','0')
})


it('Props destekliyor mu', () => {
    // eslint-disable-next-line no-undef
    cy.mount(<Stepper initialCount={20} />)
    // eslint-disable-next-line no-undef
    cy.get('#countText').should('have.text','20')
})


it('Butona Basınca Çalışıyor mu', () => {
    // eslint-disable-next-line no-undef
    cy.mount(<Stepper  />)
    // eslint-disable-next-line no-undef
    cy.get('#incrementbtn').click()
    // eslint-disable-next-line no-undef
    cy.get('#countText').should('have.text','1')
    // eslint-disable-next-line no-undef
    cy.get('#decrementbtn').click()
    // eslint-disable-next-line no-undef
    cy.get('#countText').should('have.text','0')
})

it('Butona Basınca 5 oluyor mu', () => {
    // eslint-disable-next-line no-undef
    cy.mount(<Stepper  />)
    // eslint-disable-next-line no-undef
    cy.get('#incrementbtn').click()
    // eslint-disable-next-line no-undef
    cy.get('#countText').should('not.have.text','5')
})
it('Renk özelliği veriliyor mu', () => {
    // eslint-disable-next-line no-undef
    cy.mount(<Stepper  backgroundColor="red" />)
    // eslint-disable-next-line no-undef
    cy.get('#decrementbtn').should('have.css','background-color', 'rgb(255, 0, 0)')
})

it('Dışarıya fonksiyon aktarıyor mu', () => {
    // eslint-disable-next-line no-undef
    const onTestSpy=cy.spy().as('onTestSpy')
    // eslint-disable-next-line no-undef
    cy.mount(<Stepper onTest={onTestSpy} />)
    // eslint-disable-next-line no-undef
    cy.get('#incrementbtn').click()
    // eslint-disable-next-line no-undef
    cy.get('@onTestSpy').should('have.been.calledOnce')
})
