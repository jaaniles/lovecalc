import { loveModulo } from "../loveModulo";

describe("loveModulo", () => {
  it("case 1", () => {
    const value = loveModulo({ name: "Jaani" });
    expect(value).toBe(83);
  });

  it("case 2", () => {
    const value = loveModulo({ name: "Robert" });
    expect(value).toBe(22);
  });
});
