///<reference types="cypress" />

var data = require('../../fixtures/CountryNames.json')

//  Users should be able to see all countries when they open the destinations window

describe('Users should be able to see all countries when they open the destinations window', () => {


    beforeEach('Navigate to the WebSite',()=>{

        cy.visit('/')

    })
    
    it('Testing Country Names From Africa', () => {

        cy.get('[data-type="destinations"] > .ao-header-navigation__item-link').trigger('mouseover').click()

        cy.get('[data-category-name="Africa"]').click()

        cy.get('[data-category="Africa"]').each(($el, index) => {

            const text = $el.text()
            expect(text).to.contains(data.Africa[index])

        })

    })

    it('Testing Country Names From Asia', () => {

        cy.get('[data-type="destinations"] > .ao-header-navigation__item-link').trigger('mouseover').click()

        cy.get('[data-category-name="Asia"]').click()
        
        cy.get('[data-category="Asia"]').each(($el, index) => {

            const text = $el.text()
            expect(text).to.contains(data.Asia[index])

        })

    })

    it('Testing Country Names From Europe', () => {

        cy.get('[data-type="destinations"] > .ao-header-navigation__item-link').trigger('mouseover').click()

        cy.get('[data-category-name="Europe"]').click()

        cy.get('[data-category="Europe"]').each(($el, index) => {

            const text = $el.text()
            expect(text).to.contains(data.Europe[index])

        })

    })

    it('Testing Country Names From Australia/Oceania', () => { 

        cy.get('[data-type="destinations"] > .ao-header-navigation__item-link').trigger('mouseover').click()

        cy.get('[data-category-name="Australia/Oceania"]').click()

        cy.get('[class="ao-header-navigation__dropdown-submenu-item"] > [data-category="Australia/Oceania"]').each(($el, index) => {

            const text = $el.text()
            expect(text).to.contains(data.Australia[index])

        })

    })

    it('Testing Country Names From North America', () => {

        cy.get('[data-type="destinations"] > .ao-header-navigation__item-link').trigger('mouseover').click()

        cy.get('[class="ao-header-navigation__dropdown-submenu-item"] > [data-category="North America"]').each(($el, index) => {

            const text = $el.text()
            expect(text).to.contains(data.NorthAmerica[index])

        })

    })

    it('Testing Country Names From Latin America', () => {

        cy.get('[data-type="destinations"] > .ao-header-navigation__item-link').trigger('mouseover').click()

        cy.get('[class="ao-header-navigation__dropdown-submenu-item"] > [data-category-name="Latin America"]').click()

        cy.get('[data-category="Latin America"]').each(($el, index) => {

            const text = $el.text()
            expect(text).to.contains(data.LatinAmerica[index])

        })

    })

})