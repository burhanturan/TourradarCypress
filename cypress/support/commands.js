// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Store_The_Tour_And_Trips', () => {

    //Click on the Heart icon in the popup window
    cy.xpath('//div[@class="wishlist_popup"]//span[2]', { timeout: 10000 }).click()

    //CLick on the "Done" Button 
    cy.xpath('//div[@class="wishlist_popup"]/div[2]/a', { timeout: 10000 }).click()

})

Cypress.Commands.add('Remove_The_Tour_And_Trips', () => {

    //Click on the Heart icon in the popup window
    cy.xpath('//div[@class="wishlist_popup"]//span[2]', { timeout: 10000 }).click()

    //CLick on the "Done" Button 
    cy.xpath('//div[@class="wishlist_popup"]/div[2]/a', { timeout: 10000 }).click()

})