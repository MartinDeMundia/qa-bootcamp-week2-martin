
Feature: Choose a product quantity before adding it to the cart

  A customer should be able to choose how many units of a product to buy,
  but should not be able to add zero, negative quantities or more units
  than are available in stock.

  Background:
    Given I am viewing the "Combination Pliers" product
    And 5 units of the product are available in stock

  Scenario: Add more than one unit of a product
    Given the quantity is set to 1
    When I enter 3 as the quantity
    And I add the product to my cart
    Then my cart should contain 3 Combination Pliers

  Scenario: The minus button should not reduce the quantity below 1
    Given the quantity is set to 1
    When I click the minus button
    Then the quantity should remain 1

  Scenario: Do not allow a quantity greater than the available stock
    Given the quantity is set to 1
    When I enter 6 as the quantity
    Then the quantity should not be accepted
    And my cart should not contain more than 5 Combination Pliers

  Scenario Outline: Do not accept invalid quantities
    Given the quantity is set to 1
    When I enter <quantity> as the quantity
    And I try to add the product to my cart
    Then the invalid quantity should not be added to my cart

    Examples:
      | quantity |
      | 0        |
      | -1       |
      | 999      |
