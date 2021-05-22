describe("generated from fixture", () => {
  // We cannot load JSON file using "cy.fixture"
  // because it means the test is already running.
  // Same with using "before" hook - new tests cannot be created from "before" hook.
  // Instead we need to load JSON file using "require" at the start time
  // and generate tests.

  interface IColor {
    colorsList: string[];
  }

  const colorsJson: IColor = require("./colors.json");
  const rainbow: IColor = {
    colorsList: ["red", "orange", "yellow", "green", "blue", "violet"],
  };

  colorsJson.colorsList.forEach((color: string) => {
    it(`🌈 has color ${color}`, () => {
      cy.wrap(color).should("be.oneOf", rainbow.colorsList);
    });
  });
});
