import { productListingMock } from "../../../mocks/ProductListingMock";

describe("Testing ProductListEnitity", () => {
  test("get namesCardsLog", () => {
    console.log(productListingMock.namesCardsLog);
    expect(
      productListingMock.namesCardsLog === "snikers mars kinder"
    ).toBeTruthy();
  });
});
