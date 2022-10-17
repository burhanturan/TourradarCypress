///<reference types="cypress" />

// Users should be able to filter the tours and trips

describe('Users should be able to filter the tours and trips', () => {

    //URL of the web page comes from cypress.json
    beforeEach('', () => {
        cy.visit('/')
    })

    it('Testing the filtering tours and trips', () => {

        var selectedFilters = new Array();


        //Adventure Type (Group)
        //cy.get('[for="checkbox-group-type-192"]').click()
        cy.get('[for="checkbox-group-type-372"]').each(($el) => {
            var text = $el.text()
            selectedFilters.push(text)
            cy.wrap($el).click()

        })
      

        //Guide Type (Fully Guided)
        //cy.get('[for="checkbox-guide-type-373"]').click()
        cy.get('[for="checkbox-guide-type-373"]').each(($el) => {
            var text = $el.text()
            selectedFilters.push(text)
            cy.wrap($el).click()
        })

        //Group Size (20 People)
        //cy.get('[for="checkbox-group-sizes-up_to_20"]').click()
        cy.get('[for="checkbox-group-sizes-up_to_20"]').each(($el) => {
            var text = $el.text()
            selectedFilters.push(text)
            cy.wrap($el).click()
        })

        //Adventure Style (Explorer)
        //cy.get('[for="checkbox-travel-substyles-383"]').click()
        cy.get('[for="checkbox-travel-substyles-383"]').each(($el) => {
            var text = $el.text()
            selectedFilters.push(text)
            cy.wrap($el).click()
        })

        //Must See Countryies (Germany)
        //cy.get('[for="checkbox-must-see-countries-66"]').click()
        cy.get('[for="checkbox-must-see-countries-66"]').each(($el) => {
            var text = $el.text()
            selectedFilters.push(text)
            cy.wrap($el).click()
        })

        //Physical Rating (Easy)
        //cy.get('[for="checkbox-physical-rating-377"]').click()
        cy.get('[for="checkbox-physical-rating-377"]').each(($el) => {
            var text = $el.text()
            selectedFilters.push(text)
            cy.wrap($el).click()
        })

        //Operated in (English)
        //cy.get('[for="checkbox-guide-language-1"]').click()
        cy.get('[for="checkbox-guide-language-1"]').each(($el) => {
            var text = $el.text()
            selectedFilters.push(text)
            cy.wrap($el).click()
        })



        //Assertion of selected filters
        cy.get('[class="js-serp-parameters__filters serp-parameters__filters cf"]').each(($el, index) => {

            const text = $el.text()
            expect(text).to.contains(selectedFilters[index])

            for (let i = 0; i < selectedFilters.length; i++) {
                expect(text).to.contain(selectedFilters[i])
            }
            
        })

        //Removing all selected filters
        cy.get('.js-serp-parameters__clear-all').click()

        //Assertion of removing all selected filters by checking "Clear all" buttons exists or not
        cy.get('.js-serp-parameters__clear-all').should('not.be.visible')


    })


})