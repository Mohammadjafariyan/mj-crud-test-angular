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
  cy.get("[formcontrolname='Firstname']").type(`new customer-${Math.floor(Math.random()*100)}{enter}`);
  cy.get("[formcontrolname='Lastname']").type(`new customer-${Math.floor(Math.random()*100)}{enter}`);
  cy.get("[formcontrolname='DateOfBirth']").type(`2023-11-28`);
  cy.get("[formcontrolname='PhoneNumber']").type(`+989148980692`);
  cy.get("[formcontrolname='Email']").type(`mohammad.jafariyan${Math.round(Math.random()*1000)}@gmail.com`);
  cy.get("[formcontrolname='BankAccountNumber']").type(Math.floor(Math.random()*100) + '');
  cy.get("button[type='submit']").click();


});

Then("new customer will be created and I should be redirected to the customers list", () => {
});
