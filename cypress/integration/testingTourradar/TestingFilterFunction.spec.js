///<reference types="cypress" />

// Users should be able to filter the tours and trips

describe('Users should be able to filter the tours and trips', () => {

    beforeEach('', () => {
        cy.visit('/')
    })

    it('Testing the filtering tours and trips', () => {

        let selectedFilters = []

        //Adventure Type
        cy.get('[for="checkbox-group-type-192"]').click()
        const text = cy.get('[for="checkbox-group-type-192"]')
        selectedFilters.push(text)

        //Guide Type
        cy.get('[for="checkbox-guide-type-373"]').click()
        text = cy.get('[for="checkbox-guide-type-373"]')
        selectedFilters.push(text)

        //Group Size
        cy.get('[for="checkbox-group-sizes-up_to_20"]').click()
        text = cy.get('[for="checkbox-group-sizes-up_to_20"]')
        selectedFilters.push(text)

        //Adventure Style
        cy.get('[for="checkbox-travel-substyles-383"]').click()
        text = cy.get('[for="checkbox-travel-substyles-383"]')
        selectedFilters.push(text)

        //Must See Countryies
        cy.get('[for="checkbox-must-see-countries-66"]').click()
        text = cy.get('[for="checkbox-must-see-countries-66"]')
        selectedFilters.push(text)

        //Physical Rating
        cy.get('[for="checkbox-physical-rating-377"]').click()
        text = cy.get('[for="checkbox-physical-rating-377"]')
        selectedFilters.push(text)

        //Operated in
        cy.get('[for="checkbox-guide-language-1"]').click()
        text = cy.get('[for="checkbox-guide-language-1"]')
        selectedFilters.push(text)



    })


})