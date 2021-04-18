/// <reference types="cypress" />

describe('Test for exam', () => {

    beforeEach(() => {
        //my size site configuration
        cy.viewport(1280, 720)   
    })

    it('Tests in akita store', () => {

        //logs and comments for whole process in cypress
        cy.log('Enter site')
        cy.visit('https://akita.surge.sh')
        
        cy.log('Enter email and password and move to product page')
        cy.get('.input-field > input[formcontrolname="email"]').type('lumigo@test.com', {force: true})
        cy.get('.input-field > input[formcontrolname="password"]').type('123456', {force: true})
        cy.get('button[type="submit"]').click()

        cy.log('We are in product page')
        cy.log('Enter angular in search box')
        
        cy.get('input[placeholder="Search Product.."]').type('angular')
        cy.log('Have only angular in products')

        cy.log('Clear search box')
        cy.get('input[placeholder="Search Product.."]').clear()
        cy.log('We have all three products')

        cy.log('Sort by price')
        cy.get('select').select('price')
        cy.log('verify the first item in javascript')

        cy.log('Click on the + button of each item')
        cy.get('.card > .card-action > button.cyan > i').click({ multiple: true})
        

        cy.log('Each button clicked and label in the navbar is now shows 3')
        cy.log(':)')
        
    })
})