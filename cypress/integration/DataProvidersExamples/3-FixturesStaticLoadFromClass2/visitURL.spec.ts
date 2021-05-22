import URLsProvider from "./URLsProvider";

let urlsProvider = new URLsProvider();

describe("generated from fixture", () => {
  const urls = urlsProvider.getUrls();
  debugger;
  urls.forEach((url: any) => {
    it(`Visition: JBOA ${url.url}`, () => {
      cy.visit(url.url);
    });
  });
});
