/// <reference types="Cypress" />

describe("gallery test", () => {

  //it.only("register test", () => {
  //    cy.visit("/");
  //    cy.get(".nav-link").eq(2).click();
  //    cy.url().should("contain", "/register");
  //    cy.get("#first-name").type("Test");
  //    cy.get("#last-name").type("Test");
  //    cy.get("#email").type("test1@gmail.com");
  //    cy.get("#password").type("Testsifra91");
  //    cy.get("#password-confirmation").type("Testsifra91");
  //    cy.get(":checkbox").check();
  //    cy.get("button").click();
  //});

  //it.only("no first/last name register test", () => {
  //    cy.visit("/");
  //    cy.get(".nav-link").eq(2).click();
  //    cy.url().should("contain", "/register");
  //    cy.get("#first-name").type("{backspace}");
  //    cy.get("#last-name").type("{backspace}");
  //    cy.get("#email").type("test1@gmail.com");
  //    cy.get("#password").type("Testsifra91");
  //    cy.get("#password-confirmation").type("Testsifra91");
  //    cy.get(":checkbox").check();
  //    cy.get("button").click();
  //});

  //it.only("empty email input register test", () => {
  //    cy.visit("/");
  //    cy.get(".nav-link").eq(2).click();
  //    cy.url().should("contain", "/register");
  //    cy.get("#first-name").type("Test");
  //    cy.get("#last-name").type("Test");
  //    cy.get("#email").type("{backspace}");
  //    cy.get("#password").type("Testsifra91");
  //    cy.get("#password-confirmation").type("Testsifra91");
  //    cy.get(":checkbox").check();
  //    cy.get("button").click();
  //});

  //it.only("empty password input register test", () => {
  //    cy.visit("/");
  //    cy.get(".nav-link").eq(2).click();
  //    cy.url().should("contain", "/register");
  //    cy.get("#first-name").type("Test");
  //    cy.get("#last-name").type("Test");
  //    cy.get("#email").type("test1@gmail.com");
  //    cy.get("#password").type("{backspace}");
  //    cy.get("#password-confirmation").type("{backspace}");
  //    cy.get(":checkbox").check();
  //    cy.get("button").click();
  //});

  it.only("unchecked checkbox register test", () => {
    cy.visit("/");
    cy.get(".nav-link").eq(2).click();
    cy.url().should("contain", "/register");
    cy.get("#first-name").type("Test");
    cy.get("#last-name").type("Test");
    cy.get("#email").type("test1@gmail.com");
    cy.get("#password").type("Testsifra91");
    cy.get("#password-confirmation").type("Testsifra91");
    cy.get("button").click();
  });
});