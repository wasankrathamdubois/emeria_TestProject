import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", () => {
    cy.visit(Cypress.env('host'));
    });

When("I view the page", () => {
    cy.get("header").should("be.visible");
    cy.get("app-home").should("be.visible");
    cy.get("footer").should("be.visible");
    }
);

Then("I should see the header with the logo", () => {
    cy.get("header").should("be.visible");
    cy.get("header").find("img").should("have.attr", "src", "assets/images/logo_foncia.svg");
    }
);

Then("I should see the navigation bar with links to important pages", () => {
    cy.get("header").contains("Acheter").and("have.attr", "href", "/acheter");
    cy.get("header").contains("Louer").and("have.attr", "href", "/louer");
    cy.get("header").contains("Vendre").and("have.attr", "href", "/vendre");
    cy.get("header").contains("Gestion locative").and("have.attr", "href", "/gestion-locative");
    cy.get("header").contains("Syndic").and("have.attr", "href", "/syndic-de-copropriete");
    cy.get("header").contains("Vacances").and("have.attr", "href", "https://vacances.foncia.com/");
    cy.get("header").contains("Découvrir Foncia").and("have.attr", "href", "/notre-ambition");
    cy.get("header").contains("Carrières").and("have.attr", "href", "/carrieres");
});

Then("I should see the search bar", () => {
    cy.get("app-home").find("app-research-bar").should("be.visible");
}
);

Then("I should see the featured home suggestion section", () => {
    cy.get("app-home").find("app-home-suggestion").should("be.visible");
});

Then("I should see the footer with links to important pages and contact information", () => {
   cy.get("footer").contains("Nous découvrir").and("have.attr", "href", "/notre-ambition");
    cy.get("footer").contains("Nos offres d'emplois").and("have.attr", "href", "https://foncia-recrute.talent-soft.com/");
    cy.get("footer").contains("Espace presse").and("have.attr", "href", "https://pressroom.emeria.eu/");
    cy.get("footer").contains("Avis clients").and("have.attr", "href", "/avis-clients");
    cy.get("footer").contains("Plan du site").and("have.attr", "href", "/plan-du-site");
    cy.get("footer").contains("Mentions légales").and("have.attr", "href", "/mentions-legales");
    cy.get("footer").contains("Charte Foncia de protection des données").and("have.attr", "href", "/charte-de-protection-des-donnees");
    cy.get("footer").contains("Conformité").and("have.attr", "href", "/conformite");
    cy.get("footer").contains("Nous contacter").and("have.attr", "href", "/contacter-foncia");
    cy.get("footer").contains("Trouver une agence").and("have.attr", "href", "/agence-immobiliere");
    cy.get("footer").contains("Facebook").and("have.attr", "href", "https://www.facebook.com/Foncia");
    cy.get("footer").contains("Twitter").and("have.attr", "href", "https://twitter.com/foncia");
    cy.get("footer").contains("Instagram").and("have.attr", "href", "https://www.instagram.com/fonciaimmobilier/");
    cy.get("footer").contains("LinkedIn").and("have.attr", "href", "https://www.linkedin.com/company/foncia");
    cy.get("footer").contains("YouTube").and("have.attr", "href", "https://www.youtube.com/channel/UCwR6HES_xPqAJlztBygXhOg");
}
);







