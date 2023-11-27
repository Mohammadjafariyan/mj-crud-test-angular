Feature: Board functionality

  Scenario: Create a new Customer
    Given I am on new customer form
    When I fill form and submit
    Then new customer will be created and I should be redirected to the customers list
