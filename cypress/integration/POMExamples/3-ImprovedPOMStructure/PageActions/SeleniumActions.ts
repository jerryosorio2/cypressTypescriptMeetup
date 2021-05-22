import SeleniumPage from "../PageObjects/SeleniumPage";

export default class SeleniumActions extends SeleniumPage {
  verifyTitle = (titleText: string) => {
    cy.get(this.labelTitle).contains(titleText, { matchCase: false });
  };
}
