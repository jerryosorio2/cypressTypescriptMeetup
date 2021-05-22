export default class GoogleActions {
  private inputButton: string;
  private firstResultButton: string;

  constructor() {
    this.inputButton = ".gLFyf";
    this.firstResultButton = '[href="https://www.selenium.dev/"] > .LC20lb';
  }

  search = (textToSearch: string) => {
    cy.get(this.inputButton).clear().type(textToSearch).type("{enter}");
    cy.get(this.firstResultButton).click();
  };
}
