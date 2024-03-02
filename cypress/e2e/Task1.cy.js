/// <reference types="cypress" />
describe('selectors',()=>{
    
    it.only("Validate selector",()=>{
        cy.visit("/#/register")
    //conduit
    cy.get("a").contains("conduit")
    //Home
    cy.get("app-header").find("li").eq(0)
    //Sign up
    cy.get("app-header").find("li").eq(2)
    //Sign up text 
    cy.get("h1").contains("Sign up")
    //Have an account 
    cy.get("div.container.page").find("[ui-sref='app.login']")
    //User name 
    cy.get("form").find("fieldset > fieldset").eq(0)
    //email 
    cy.get("fieldset:nth-child(2) > input") 
    //Password 
    cy.get("[placeholder='Password']")
    //sign up button 
    cy.get("fieldset > button")

    cy.get(".logo-font")

    cy.get(".container").find(".attribution")
    })

})