import { Locale, locales } from "../locale";

it("Check Locale", () => {
  expect.assertions(1);

  return expect(Locale).toMatchSnapshot();
});

it("Check locales", () => {
  expect.assertions(1);

  return expect(locales).toMatchSnapshot();
});
