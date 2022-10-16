

describe('test hover',()=>{
    it('test',()=>{
        cy.visit('/')
        cy.get('.js-ao-header-navigation__profile-placeholder').realHover()
        cy.get('.ao-header-navigation__dropdown > .ao-header-navigation__dropdown-list--profile > .ao-header-navigation__dropdown-button-wrapper > .aa-btn--secondary').should('be.visible')
    })
})