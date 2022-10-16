///<reference types="cypress" />

// Users should be able to filter the tours and trips

describe('Users should be able to filter the tours and trips', () => {

    beforeEach('', () => {
        cy.visit('/')
    })

    it('Testing the filtering tours and trips', () => {

        let selectedFilters = []
        let text = ""

        //Adventure Type
        cy.get('[for="checkbox-group-type-192"]').click()
        cy.get('[for="checkbox-group-type-192"]').invoke('text').then((textOfFilter) => {
            text = textOfFilter
        })
        selectedFilters.push(text)

        //Guide Type
        cy.get('[for="checkbox-guide-type-373"]').click()
        cy.get('[for="checkbox-guide-type-373"]').invoke('text').then((textOfFilter) => {
            text = textOfFilter
        })
        selectedFilters.push(text)

        //Group Size
        cy.get('[for="checkbox-group-sizes-up_to_20"]').click()
        cy.get('[for="checkbox-group-sizes-up_to_20"]').invoke('text').then((textOfFilter) => {
            text = textOfFilter
        })
        selectedFilters.push(text)

        //Adventure Style
        cy.get('[for="checkbox-travel-substyles-383"]').click()
        cy.get('[for="checkbox-travel-substyles-383"]').invoke('text').then((textOfFilter) => {
            text = textOfFilter
        })
        selectedFilters.push(text)

        //Must See Countryies
        cy.get('[for="checkbox-must-see-countries-66"]').click()
        cy.get('[for="checkbox-must-see-countries-66"]').invoke('text').then((textOfFilter) => {
            text = textOfFilter
        })
        selectedFilters.push(text)

        //Physical Rating
        cy.get('[for="checkbox-physical-rating-377"]').click()
        cy.get('[for="checkbox-physical-rating-377"]').invoke('text').then((textOfFilter) => {
            text = textOfFilter
        })
        selectedFilters.push(text)

        //Operated in
        cy.get('[for="checkbox-guide-language-1"]').click()
        cy.get('[for="checkbox-guide-language-1"]').invoke('text').then((textOfFilter) => {
            text = textOfFilter
        })
        selectedFilters.push(text)


        //Assertion of selected filters
        cy.get('[class="js-serp-parameters__filters-filter serp-parameters__filters-filter cf"]').each(($el,index)=>{

            let text = $el.text()
            expect(text).to.contains(selectedFilters[index])

        })

        //Removing all selected filters
        cy.get('.js-serp-parameters__clear-all').click()

        //Assertion of removing all selected filters by checking "Clear all" buttons exists or not
        cy.get('.js-serp-parameters__clear-all').should('not.be.visible')


    })


})