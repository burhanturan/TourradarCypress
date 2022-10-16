///<reference types="cypress" />

//User should be able to search specific tours and trips

import { destination } from '../../support/destinationsConstant.js'

describe('User should be able to search specific tours and trips', () => {

    beforeEach('Navigate to the page', () => {

        //URL of the web page comes from cypress.json
        cy.visit('/')

    })

    it('Testing Search Functionality', () => {

        cy.get('.search > .header-top-search__input').type(destination).type('{enter}', { force: true })
        //cy.get('.search > .header-top-search__input').type('{enter}', { force: true })

        cy.xpath('//dl[@class="ao-clp-algolia-search__tour-values"]/dd[2]').each(($el)=>{
            const text = $el.text()
            expect(text).to.contains(destination)
        })

    })

})