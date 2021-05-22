export default class SeleniumPage {
  protected labelTitle: string;

  constructor() {
    this.labelTitle = ".hero > :nth-child(1)";
  }
}
