import { loveLetterMatch } from "../loveLetterMatch";

describe("loveLetterMatch", () => {
  it("case 1", () => {
    const value = loveLetterMatch({ name: "Jaani" });
    expect(value).toMatchObject({ lovePercentage: 100 });
  });

  it("case 1", () => {
    const value = loveLetterMatch({ name: "Aleksi" });
    expect(value).toMatchObject({ lovePercentage: 55 });
  });

  it("case 1", () => {
    const value = loveLetterMatch({ name: "Robert" });
    expect(value).toMatchObject({ lovePercentage: 83 });
  });
});
