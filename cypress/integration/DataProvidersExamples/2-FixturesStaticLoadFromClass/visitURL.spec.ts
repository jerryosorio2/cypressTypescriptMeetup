/// <reference types="cypress" />
import URLsProvider from "./URLsProvider";

let uRLsProvider = new URLsProvider();

describe("generated from fixture", () => {
  uRLsProvider.getUrls().forEach((url: string) => {
    it(`Visition: ${url}`, () => {
      cy.visit(url);
    });
  });
});
