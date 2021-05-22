describe("generated from fixture", () => {
  interface IUrls {
    urls: string[];
  }

  const urlsJson: IUrls = require("./urls.json");

  urlsJson.urls.forEach((url: string) => {
    it(`Visition: ${url}`, () => {
      cy.visit(url);
    });
  });
});
