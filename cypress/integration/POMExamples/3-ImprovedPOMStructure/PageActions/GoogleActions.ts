import GooglePage from "../PageObjects/GooglePage";

export default class GoogleActions extends GooglePage {
  search = (textToSearch: string) => {
    cy.get(this.inputButton).clear().type(textToSearch).type("{enter}");
    cy.get(this.firstResultButton).click();
  };
}
