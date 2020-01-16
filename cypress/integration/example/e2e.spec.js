/// <reference types="Cypress" />

describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Navbar', () => {
    cy.get('.navbar').should('have.length', 1);
    cy.get('.navbar__logo').should('have.text', 'LOGO');
  });

  it('adds, removes an item and goes to homepage', () => {
    cy.get('.redirect')
      .eq(0)
      .click();
      cy.wait(2000);
    cy.get('.card-detail__container--bottom__right--button').should(
      'have.text',
      'Add to Cart'
    );
    cy.get('.card-detail__container--bottom__right--button').click();
    cy.get('.card-detail__container--bottom__right--button').should(
      'have.text',
      'Added'
    );
    cy.get('.cart__container--item__cart-number').should(
      'have.text',
      'Cart (1)'
    );
    cy.get('.cart__container--item__total').should('have.text', 'Total $ 40');
    cy.get('.cart__container--basket').should('have.length', 1);
    cy.get('.cart__container--item__remove').click();
    cy.get('.cart__container--basket')
      .should('have.length', 1)
      .should('have.text', 'Cart is empty');

    cy.get('.navbar__item ')
      .eq(0)
      .click();
  });
});
