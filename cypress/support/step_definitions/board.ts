import { When, Then, Given  , Before} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  // reset application
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

})
Given("I am on empty home page", () => {
  cy.visit("/");
});

When("I type in {string} and submit", (boardName) => {
  cy.get("[data-cy=goNewCustomer]").type(`${boardName}{enter}`);
});

Then("I should be redirected to the board detail", () => {
  cy.location("pathname").should('match', /\/board\/\d/);
});
