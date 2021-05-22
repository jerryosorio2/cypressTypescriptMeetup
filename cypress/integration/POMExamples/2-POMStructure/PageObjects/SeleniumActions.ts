export default class SeleniumActions {
  private labelTitle: string;

  constructor() {
    this.labelTitle = ".hero > :nth-child(1)";
  }

  verifyTitle = (titleText: string) => {
    cy.get(this.labelTitle).contains(titleText, { matchCase: false });
  };
}
