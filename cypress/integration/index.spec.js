import { get } from "http";

// const dataBox = cy.get('formBox')

describe('full page', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('has a list element', () => {

        cy.get('#list')
            .children()
            .should('have.length', 4)

    })
    it('can add an item to the list', () => {

        cy.get('#list')
        cy.get('#formBox')
            .type('whatever {enter}')
        cy.get('#list')
            .children()
            .should('have.length', 5)


    })
    it('strikes an item in the check list once clicked', () => {

        cy.get('.listItem')
            .click()
            .should('have.property, line-through')



    })
})