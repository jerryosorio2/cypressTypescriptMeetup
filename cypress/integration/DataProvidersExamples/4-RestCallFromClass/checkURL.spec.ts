import URLsProvider from "./URLsProvider";

let urlsProvider = new URLsProvider();

describe("URLS Checking", () => {
  const urls = urlsProvider.getUrls();
  urls.forEach((url: any) => {
    it(`Visition:  ${url.url}`, () => {
      cy.request(url.url).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });
});
