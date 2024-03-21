/// <reference types="cypress" />
describe('Task2 Test cases',()=>{

    beforeEach("",()=>{
        //Custom login command Login 
        cy.loginToWebsite("admin@yourstore.com","admin")

        //Navigate product page under catalog 
        cy.get("#nopSideBarPusher").click()
        cy.get("ul").find("li").eq(1).click({force: true})
        cy.contains("p","Products").click({force: true})


        })
        
      //  B- Add Product test case
    it("Add Product test case",()=>{
        // Add new product called => “Laptop123”
        cy.get("[href='/Admin/Product/Create']").click()
        cy.get("#product-info > div.card-header.with-border.clearfix").click()
        cy.wait(1000)
        cy.get("#Name").type("Laptop123")
        cy.wait(3000)
        // Take a screenshot of the type runner for the second test case test case after adding the name of the product .
        cy.screenshot()
        cy.wait(1000)
        //  Select category for the product => “Computers”
        // cy.get('.k-multiselect-wrap').click({force: true ,  multiple: true }); // Click on the multiselect dropdown to open it
        cy.get('#SelectedCategoryIds').select('Computers',{force: true});
        cy.wait(1000)
        //  Add Price for the product => “3000”
        cy.get("#Price").type("3000",{force: true})
        cy.get("[name='save']").click()

        //Assertion 
        cy.contains("The new product has been added successfully.").should("be.visible")
    })

    //C- Search for product test case
    it("Search for product test case",()=>{
      
        // Search For the product 
        cy.get(".card-search").click({force: true})
        cy.get("#SearchProductName").type("Laptop123")
        cy.get("#search-products").click()
    })

    //D- Delete product test case
    it("Delete product test case",()=>{

        //2. Search for any item you created before.

        // Search For the product 
        cy.get(".card-search").click({force: true})
        cy.get("#SearchProductName").type("Laptop123")
        cy.get("#search-products").click()
        cy.wait(3000)

        //3. Select all the products in the results table .
        cy.get('input.mastercheckbox').first().click({force: true});
        cy.get("#delete-selected").click()
        cy.wait(3000)
        //4. Delete all the selected products in the table .
        cy.get("#delete-selected-action-confirmation-submit-button").click()
        cy.wait(1000)
        cy.contains("No data available in table").should("be.visible")
    })

})