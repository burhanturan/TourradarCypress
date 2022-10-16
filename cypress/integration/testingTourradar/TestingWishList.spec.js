///<reference types="cypress" />

//  User should be able to save tours and trips inside Wishlist Page and delete them

import { homeURL, email, password } from '../../support/tourradarConstants'

describe('User should be able to save tours and trips inside Wishlist Page and delete them', () => {

    beforeEach('Navigate to the page', () => {

        //URL of the web page comes from cypress.json
        cy.visit(homeURL)

    })

    it('Testing saving tours&trips and inside wishlist page and deleting them', () => {

        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover').click()
        //cy.get('.aa-switch-button__label').click()
        cy.xpath('(//a[@data-login-traveller-url="/login"])[1]').click()

        cy.get('#g_email').type(email)
        cy.get('#g_password').type(password)
        cy.get('.title').click()

        cy.xpath('(//a[.="Destinations"])[1]').trigger('mouseover').click()
        cy.xpath('//span[@data-category="Europe"]').click()

        cy.xpath('//div[@class="sbtn cpr"]').each(($el) => {

            cy.wrap($el).click()
            // cy.get('[data-id="2303348"]',{ timeout: 10000 }).click()
            // //cy.xpath('(//span[@class="icon"])[1]', { timeout: 10000 }).click()
            // cy.contains('Done', { timeout: 10000 }).click()
            cy.Store_The_Tour()

        })


    })
})