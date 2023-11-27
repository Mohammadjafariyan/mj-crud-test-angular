import { When, Then, Given  , Before} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  // reset application
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

})

Given("I am on new customer form", function () {

  cy.visit("/");
  cy.get("[data-cy=goNewCustomer]").click();
  //return "pending";
  cy.location("pathname").should('eq','/customers/save');

});

When("I fill form and submit", () => {
  cy.get("[data-cy=goNewCustomer]").type(`new customer-${Math.floor(Math.random()*100)}{enter}`);

});

Then("new customer will be created and I should be redirected to the customers list", () => {
});
