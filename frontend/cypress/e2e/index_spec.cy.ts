/// <reference types="Cypress" />

describe('App E2E', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Test that the page loads and contains certain elements', () => {
    // cy.visit('/')
    
    cy.contains('Pikadex')
    cy.contains('Surprise me!')
    cy.contains('Bulbasaur')
    cy.contains('Charmander')
    cy.contains('Squirtle')
    cy.contains('Caterpie')
    cy.contains('Page 1')
    cy.contains('#001')
    cy.contains('Grass')
    cy.contains('Poison')
    cy.contains('Fire')
    cy.contains('Dark')

  })

  it ('Search for pikachu, then try to open card. Check that card contains stats and then exit card', () => {
    // cy.visit('/') //NB! Husk å bytte til VM-location

    cy.get(".searchbar")
        .type('pikachu')
        .should('have.value', 'pikachu')
        .type('{enter}')
        .get(".searchbar").should('have.value', 'pikachu')
        .get('.cardContainer').each(($el, index, $list) => {
          expect($el).has.descendants(".pokeIndex")
          expect($el).has.descendants(".infoContainer")
          expect($el).has.descendants(".tags")
          expect($el).has.descendants(".nameTag")
          expect($el).has.descendants(".imageContainer")
          })
        .get('.cardContainer').click()
        .get('.expandendCardContainer').each(($el, index, $list) => {
          expect($el).has.descendants(".exp")
          expect($el).has.descendants(".height")
          expect($el).has.descendants(".weight")
          })
        cy.wait(1000)
          .get('.arrowBack').click()
          
        })

  it ('Test surprise me button', () => {
    // cy.visit('/') //NB! Husk å bytte til VM-location
    cy.contains('Surprise me').click()


  })

  it ('Test paging', () => {
    // cy.visit('/') //NB! Husk å bytte til VM-location
    cy.wait(1000)
    cy.scrollTo('bottom') //Scroll to
    cy.wait(1000)
    // cy.contains('Page 1')
    cy.get('.pageForward').click()
    cy.contains('Page 2')
    // cy.wait(1000)
    cy.get('.pageBack').click()
    cy.contains('Page 1')
  })


  it ('Choose Bulbasaur and favorite it', () => {
    // cy.visit('/') //NB! Husk å bytte til VM-location

    cy.get(".searchbar")
        .type('bulbasaur')
        .should('have.value', 'bulbasaur')
        .type('{enter}')
        .get(".searchbar").should('have.value', 'bulbasaur')
        .get('.cardContainer').each(($el, index, $list) => {
          expect($el).has.descendants(".pokeIndex")
          expect($el).has.descendants(".infoContainer")
          expect($el).has.descendants(".tags")
          expect($el).has.descendants(".nameTag")
          expect($el).has.descendants(".imageContainer")
          })
        .get('.cardContainer').click()
        .get('.expandendCardContainer').each(($el, index, $list) => {
          expect($el).has.descendants(".exp")
          expect($el).has.descendants(".height")
          expect($el).has.descendants(".weight")
          })
        cy.wait(1000)
          .get('.star').click()
          
        })
  
  it ('Filter for pokemon for one type', () => {
    // cy.visit('/') //NB! Husk å bytte til VM-location

    cy.get('.navbarDropdown').click()
    cy.wait(300)
      .contains('electric').click();
    cy.contains('Search').click();
    cy.wait(300)
      .contains('Pikachu')
  })


  it ('Filter for pokemon for two types and then remove filter', () => {
    // cy.visit('/') //NB! Husk å bytte til VM-location

    cy.get('.navbarDropdown').click()
    cy.wait(300)
    cy.contains('normal').click();
    cy.contains('dark').click();
    cy.contains('Search').click();
    cy.wait(300)
      .contains('Meowth')
    cy.contains('dark').click();
    cy.contains('normal').click();
    cy.get('.searchIcon').click();
    cy.contains('Bulbasaur')
  })

})  