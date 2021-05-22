export default class SeleniumActions {
  verifyTitle = (titleText: string) => {
    cy.fixture(
      "../integration/POMExamples/4-FixturesStructure/PageFixtures/Selenium.json"
    ).then((locators) => {
      cy.get(locators.labelTitle).contains(titleText, { matchCase: false });
    });
  };
}
