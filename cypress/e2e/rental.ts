import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

  Given("I am on the home page", () => {
    cy.visit(Cypress.env('host'));
    });

  When("I click on the {string} button in projectToggle", (project) => {
    cy.get("#projectToggle").click();
    cy.get('form').contains(`${project}`).click();
    });

  When("I select {string} as the type of property", (type) => {
    cy.get("#propertyToggle").click();
    cy.get('form').contains(`${type}`).click();
    }
  );

  When("I enter a maximum price of {string}", (price) => {
    cy.get("#price").type(`${price}`);
    }
  );

  When("I enter {string} as the city", (city) => {
    cy.get("#city").type(`${city}`);
    // in a role="listbox" element, the user select Paris (75) from the list
    cy.get('[role="listbox"]').contains("Paris (75)").click();

    }
  );

  When("I press the search button", () => {
    //click a button with text "Rechercher"  with type="submit"
    cy.get('button[type="submit"]').contains("Rechercher").click();
    }
  );

  Then("I should see {string} in the URL", (url) => {
    cy.url().should("include", `${url}`);
    cy.intercept('POST', Cypress.env('api_server') + '/annonces/annonces/search').as('search');
    // Verify that the search response contains annonces[i].loyer <= 1500
    cy.wait('@search').then((interception) => {
      expect(interception.response.body.annonces).to.satisfy((annonces) => {
        return annonces.every((annonce) => annonce.loyer <= 1500);
      });
    }
  );
  });


