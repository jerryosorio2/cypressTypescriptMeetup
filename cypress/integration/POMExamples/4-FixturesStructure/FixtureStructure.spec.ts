import GoogleActions from "./PageActions/GoogleActions";
import SeleniumActions from "./PageActions/SeleniumActions";

let googleActions = new GoogleActions();
let seleniumActions = new SeleniumActions();

describe("FixtureStructure", () => {
  before(() => {
    cy.visit("http://www.google.com");
  });

  it("Searching in Google", () => {
    googleActions.search("Selenium");
    seleniumActions.verifyTitle("Selenium");
  });
});
