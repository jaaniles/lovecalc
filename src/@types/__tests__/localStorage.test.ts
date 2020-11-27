import { LocalStorage } from "../localStorage";

it("Check LocalStorage", () => {
  expect.assertions(1);

  return expect(LocalStorage).toMatchSnapshot();
});
