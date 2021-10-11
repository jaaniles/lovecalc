import { peppesLoveFn } from "../peppesLoveFn";

describe("peppesLoveFn", () => {
  it("case 1", () => {
    expect(peppesLoveFn({ name: "Jaani" })).toBe(66);
  });

  it("case 2", () => {
    expect(peppesLoveFn({ name: "Robert" })).toBe(48);
  });

  it("case 3", () => {
    expect(peppesLoveFn({ name: "Aleksi" })).toBe(72);
  });
});
