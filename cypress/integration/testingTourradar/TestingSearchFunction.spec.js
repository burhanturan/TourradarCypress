///<reference types="cypress" />

//User should be able to search specific tours and trips

import { destination } from '../../support/tourradarConstants.js'

describe('User should be able to search specific tours and trips', () => {

    beforeEach('Navigate to the page', () => {

        //URL of the web page comes from cypress.json
        cy.visit('/')

    })

    it('Testing Search Functionality', () => {

        //Type destination into the search box
        cy.get('.search > .header-top-search__input').type('Istanbul{enter}', { force: true })

        //Asserting that all destinations contain the specific destination
        cy.xpath('//dl[@class="ao-clp-algolia-search__tour-values"]/dd[2]', { timeout: 10000 }).each(($el) => {

            const text = $el.text()
            expect(text).to.contains(destination)

        })

    })

})