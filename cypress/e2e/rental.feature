Feature: Search for rental apartments in Paris
  As a user, I want to search for rental apartments with a maximum price of 1500 in Paris.

Scenario: Search for apartments with max price of 1500 in Paris
  Given I am on the home page
  When I click on the "Louer" button in projectToggle
  When I select "Tous" as the type of property
  When I select "Appartement" as the type of property
  When I enter a maximum price of "1500"
  When I enter "Paris" as the city
  When I press the search button
  Then I should see "/location/paris-75/appartement?prix=--1500&advanced=" in the URL