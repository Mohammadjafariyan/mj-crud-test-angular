Feature: Board functionality

  Scenario: Create a board
    Given I am on empty home page
    When I type in "my board" and submit
    Then I should be redirected to the board detail
