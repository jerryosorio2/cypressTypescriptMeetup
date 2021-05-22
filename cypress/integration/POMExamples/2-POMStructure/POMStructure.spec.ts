import GoogleActions from "./PageObjects/GoogleActions";
import SeleniumActions from "./PageObjects/SeleniumActions";

let googleActions = new GoogleActions();
let seleniumActions = new SeleniumActions();

describe("POMStructure", () => {
  before(() => {
    cy.visit("http://www.google.com");
  });

  it("Searching in Google", () => {
    googleActions.search("Selenium");
    seleniumActions.verifyTitle("Selenium");
  });
});
