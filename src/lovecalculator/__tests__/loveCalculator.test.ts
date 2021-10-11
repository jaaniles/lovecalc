import { lovecalculator, LoveFN } from "../lovecalculator";

describe("loveModulo", () => {
  it("case 1", () => {
    let paramName: string | null = null;
    const func: LoveFN = ({ name }) => {
      paramName = name;

      return 5;
    };
    const value = lovecalculator({ name: "Jaani", funcs: [func] });
    expect(value).toMatchObject({ lovePercentage: 5 });
    expect(paramName).toBe("Jaani");
  });
});
