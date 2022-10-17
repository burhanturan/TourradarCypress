///<reference types="cypress" />

//  User should be able to save tours and trips inside Wishlist Page and delete them

import { homeURL, email, password } from '../../support/tourradarConstants'

describe('User should be able to save tours and trips inside Wishlist Page and delete them', () => {

    beforeEach('Navigate to the page', () => {

        //URL of the web page comes from cypress.json
        cy.visit(homeURL)

    })

    it.only('Testing saving tours&trips and inside wishlist page and deleting them', () => {

        //Navigating to the Login Page
        cy.get('.js-ao-header-navigation__profile-placeholder').trigger('mouseover').click()

        //Click on Login Button
        cy.xpath('(//a[@data-login-traveller-url="/login"])[1]').click()

        //Entering valid email
        cy.get('#g_email').type(email)

        //Entering valid password
        cy.get('#g_password').type(password)

        //Click on Login Button
        cy.get('.title').click()

        //Assertion of successfull Login
        cy.get('[class="initials"]').should('be.visible')

        //Destinations window
        cy.xpath('(//a[.="Destinations"])[1]').trigger('mouseover').click()

        //Europe Region Button
        cy.xpath('//span[@data-category="Europe"]').click()

        //Iteration all the Tours & Trips on the page
        cy.xpath('//div[@class="sbtn cpr"]').each(($el) => {

            //Click on the heart button one by one
            cy.wrap($el).click()

            // Store_The_Tour_And_Trips() methods comes from Support/Command.js
            cy.Store_The_Tour_And_Trips()

        })

        //Click on the Wishlist Page Heart button
        cy.xpath('//li[@class="ao-header-navigation__wishlist ao-header-navigation__wishlist--desktop"]/a').scrollIntoView().click()

        //CLick on the "Load More" button in the Wishlist Page
        cy.get('[class="but blue p "]', { timeout: 10000 }).scrollIntoView().click()

        cy.wait(1500)

        //Assertion of the selected Tours & Trips in the Wishlist Page
        cy.get('[class="sbtn cpr  active "]').should('have.length', 15)


        //Removing the selected Tours & Trips one by one
        cy.xpath('//div[@class="img"]/div', { timeout: 10000 }).each(($element) => {

            //Click on the heart button on the Tours & Trips image
            cy.wrap($element).scrollIntoView().click()

            // Remove_The_Tour_And_Trips() methods comes from Support/Command.js
            cy.Remove_The_Tour_And_Trips()

        })

        //Assertion of removing of selected Tours & Trips
        cy.get('[class="sbtn cpr  active "]').should('have.length', 0)

        //Hover over My Account icon
        cy.get('[class="initials"]').realHover()

        //Click on Log out button
        cy.get('[class="ao-header-navigation__dropdown-link ao-header-navigation__dropdown-link--with-icon ao-header-navigation__dropdown-link--logout"]').click()

        //Assertion of loging out 
        cy.get('[class="js-ao-header-navigation__profile-placeholder ao-header-navigation__profile-placeholder"]').should('be.visible')

    })

})