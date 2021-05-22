export default class GoogleActions {
  search = (textToSearch: string) => {
    cy.fixture(
      "../integration/POMExamples/4-FixturesStructure/PageFixtures/Google.json"
    ).then((locators) => {
      cy.get(locators.inputButton).clear().type(textToSearch).type("{enter}");
      cy.get(locators.firstResultButton).click();
    });
  };
}
